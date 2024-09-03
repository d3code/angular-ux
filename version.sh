#!/bin/bash
# ---------------------------------------------------------------------------------------------------
# Increment Git tag semantic version
# ---------------------------------------------------------------------------------------------------
#
# - On the current commit, run the script with the argument (major/minor/patch)
# - If you would like to push the tag immediately to origin, add the argument (push)
#
# ./version.sh patch push
#
# - If you have ( #major / #minor / #patch ) in the commit message, it will use that to increment the version
#
# ./version.sh
# ./version.sh push
#
# The script will echo the version incremented to, or the tag of the current commit or hash as the
# last line output. You can use this in a variable to use as part of another process
#
# GIT_TAG_OR_COMMIT=$(./version.sh | tail -1);
#
# ---------------------------------------------------------------------------------------------------
# Based on Gist by Carl Taylor https://gist.github.com/CSTDev/08c127680e3b5fae38c051da3e489351
# ---------------------------------------------------------------------------------------------------

# Get current Git commit
GIT_COMMIT=$(git rev-parse HEAD 2>/dev/null)
if [ -z "$GIT_COMMIT" ]; then
  echo "Not a Git repository"
  exit 1
fi

# Get latest tag version
VERSION=$(git describe --abbrev=0 --tags 2>/dev/null)
VERSION_REGEX='^v[0-9]+\.[0-9]+\.[0-9]+'

# If no previous tag, set VERSION to 0.0.0
if [ -z "$VERSION" ]; then
  VERSION=v0.0.0
fi

# Ensure the previous tag is in the correct semantic version format
if ! [[ "$VERSION" =~ $VERSION_REGEX ]] ; then
   echo "Previous tag [ $VERSION ] must be in the format [ v0.0.0 ]" >&2
   echo "$GIT_COMMIT"
   exit 0
fi

# Replace [.] with [ ] (a space) so can split into an array
VERSION_BITS=(${VERSION//./ })

# Get version parts and increase last one by 1
VERSION_PARTS_1=${VERSION_BITS[0]}
VERSION_PARTS_2=${VERSION_BITS[1]}
VERSION_PARTS_3=${VERSION_BITS[2]}

# Remove [v] from VERSION_PARTS_1
VERSION_PARTS_1=$(echo "$VERSION_PARTS_1" | sed 's/v//')

# Check for [#major] or [#minor] or [#patch] in commit message
MAJOR=$(git log --format=%B -n 1 HEAD | grep '#major')
MINOR=$(git log --format=%B -n 1 HEAD | grep '#minor')
PATCH=$(git log --format=%B -n 1 HEAD | grep '#patch')

# If version modifier in commit message or argument, increment
if [ "$MAJOR" ] || [ "$1" == "major" ]; then
  VERSION_PARTS_1=$((VERSION_PARTS_1 + 1))
  VERSION_PARTS_2=0
  VERSION_PARTS_3=0
elif [ "$MINOR" ] || [ "$1" == "minor" ]; then
  VERSION_PARTS_2=$((VERSION_PARTS_2 + 1))
  VERSION_PARTS_3=0
elif [ "$PATCH" ] || [ "$1" == "patch" ]; then
  VERSION_PARTS_3=$((VERSION_PARTS_3 + 1))
else
  echo "No version modifiers found in commit or passed as argument"
  echo "$GIT_COMMIT"
  exit 0
fi

# Create new tag
NEW_TAG="v$VERSION_PARTS_1.$VERSION_PARTS_2.$VERSION_PARTS_3"

# Get current hash and see if it already has a tag
NEEDS_TAG=$(git describe --contains "$GIT_COMMIT" 2>/dev/null)

## If not tag at this commit, create and push a new tag with incremented version from previous tag
if [ -z "$NEEDS_TAG" ]; then
  echo "Updating from previous tag version $VERSION to $NEW_TAG"
  git tag $NEW_TAG
  echo "$NEW_TAG"

  if [ "$1" == "push" ] || [ "$2" == "push" ]; then
    echo "Pushing tag [ $NEW_TAG ] to [ origin ]"
    git push origin $NEW_TAG
  fi

## If tag is already at this commit, echo the tag
else
  echo "Already tag at commit [ $GIT_COMMIT ]"
  echo "$VERSION"
fi