import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../../services/auth.service';
import { environment } from '../../../../../environments/environment';
import { Filter } from '../../pipes/filter/filter';
import { Pagination } from '../../pipes/pagination/pagination';
import { map, tap } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'x-file-upload-drop',
  template: `
    <h4 class="mt-8 mb-2">Attachments</h4>

    <ng-container *ngIf="files as accounts">
      <table>
        <tbody>
          <tr (click)="setFile(a)" [x-offcanvas]="'file'" *ngFor="let a of accounts | filter:filter | pagination:pagination">
            <!-- <td>{{a.id}}</td> -->
            <td class="text-sm">{{a.file_name}}</td>
            <td class="text-sm">{{a.mime}}</td>
            <td class="text-sm">{{a.created}}</td>
            <!-- <td>{{a.path}}</td> -->
          </tr>
        </tbody>
      </table>
      <div>
        <ul class="inline pagination">
          <li>
            <a (click)="pagination.previousPage()">
              <i class="fa-light fa-chevron-left fa-fw"></i>
            </a>
          </li>
          <li class="page-number">
            <p>{{pagination.currentPage + 1}} of {{pagination.getTotalPages()}}</p>
          </li>
          <li>
            <a (click)="pagination.nextPage()">
              <i class="fa-light fa-chevron-right fa-fw"></i>
            </a>
          </li>
        </ul>
      </div>
      
    </ng-container>

    <form>
      <input
        (onchange)="uploadFile($event)"
        class="custom-file-input"
        type="file"
        multiple
        accept="*"
      />
    </form>

    <x-offcanvas trigger="file" [width]="550">
    <h3>File</h3>

      <ng-container *ngIf="file">

        <img width="100%" *ngIf="file.mime.startsWith('image/')"  [src]="url">
        <iframe width="100%" *ngIf="file.mime.startsWith('text/') || file.mime.startsWith('application/pdf')" [src]="url" frameborder="0"></iframe>
        
      </ng-container>

    </x-offcanvas>

  `,
  styles: `
    tr:hover {
      background-color: #fff;
      cursor: pointer;

      -webkit-user-select: none;
      user-select: none;

      border-bottom: 1px solid var(--color-blue-2);

      // -webkit-transition: background-color 0.25s ease;
      // transition: background-color 0.25s ease;
    }

    tr {
      border-bottom: 1px solid transparent;
    }

    td {
      padding: 0.8rem 1rem;
    }

    input[type="file"] {
      margin-top: 2rem;
      display: block;
      padding: 4rem 2rem;
      text-align: center;
      color: transparent;
      border: 1px dashed var(--color-grey-3);
      font-weight: 200;
      cursor: pointer;
    }

    .custom-file-input::-webkit-file-upload-button {
      visibility: hidden;
    }

    .custom-file-input::before {
      text-align: center;
      content: "drag, click or press to upload a file";
      color: var(--text-color);
      display: block;
      outline: none;
      white-space: nowrap;

      -webkit-user-select: none;
      user-select: none;
      
      cursor: pointer;
    }
  `
})
export class FileUploadDropComponent implements OnInit {
  constructor(
    private el: ElementRef,
    private authService: AuthService,
    private http: HttpClient,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    var e: HTMLElement = this.el.nativeElement.getElementsByTagName('input')[0];

    e.addEventListener('change', (e: any) => {
      console.log(e.target.files);

      for (let i = 0; i < e.target.files.length; i++) {
        this.uploadFile(e.target.files[i]);
      }

      e.target.value = '';
    });

    this.pagination.pageSize = 5;
    this.getFiles();
  }

  getFiles() {

    this.http
      .get<Array<any>>(environment.apiBase + '/file/attachment')
      .pipe(this.authService.handleAuthError())
      .pipe(
        map((data: Array<any>) => {
          return data.filter((item) => item.path == this.path);
        })
      )
      .pipe(
        tap((data: Array<any>) => {
          this.files = data;
        })
      )
      .subscribe();
  }

  uploadId = 0;

  uploadFile(file: any) {
    if (!this.path) {
      console.error('Path not defined');
      return;
    }

    this.uploadId++;
    const id = this.uploadId;

    this.uploadStatus.push({
      id: id,
      name: file.name,
      status: 'Uploading',
    });

    console.log(file);

    let url = environment.apiBase + '/file/upload';
    let formData = new FormData();

    formData.append('file', file);
    formData.append('path', this.path);

    this.http.post(url, formData).subscribe((res) => {
      console.log(res);
      this.uploadStatus = this.uploadStatus.filter((item) => item.id != id);
      this.getFiles();
    });
  }

  setFile(file: any) {
    console.log(file);

    const fileURL = environment.apiBase + '/file/attachment/' + file.id + '?token=' + localStorage.getItem('token')

    console.log(fileURL);
    this.file = file;
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(fileURL);
  }

  @Input()
  path: string | undefined;

  filter = new Filter();
  pagination = new Pagination();

  uploadStatus: any[] = [];

  files: Array<any> = [];
  file: any;
  baseUrl: string = environment.apiBase;

  url: any;
}
