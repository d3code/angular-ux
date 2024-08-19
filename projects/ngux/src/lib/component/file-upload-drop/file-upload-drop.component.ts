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
  templateUrl: './file-upload-drop.component.html',
  styleUrls: ['./file-upload-drop.component.scss'],
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
