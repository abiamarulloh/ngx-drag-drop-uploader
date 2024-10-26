import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'ngx-easy-drag-uploader',
  templateUrl: './ngx-easy-drag-uploader.component.html',
  styleUrls: ['./ngx-easy-drag-uploader.component.css'] 
})
export class NgxEasyDragUploaderComponent {
  @Input() maxFileSize: number = 5 * 1024 * 1024; // 5 MB default
  @Input() acceptedFileTypes: string = 'image/*'; // Accept images by default
  @Input() uploadMessage: string = 'Drag and drop files here or click to select files'; // Dynamic upload message
  @Input() filesHeader: string = 'Files:'; // Dynamic header for files list
  @Input() uploadingHeader: string = 'Uploading...'; // Dynamic header for uploading status
  @Input() validationHeader: string = 'Validation Messages:'; // Dynamic header for validation messages
  @Output() filesUploaded: EventEmitter<File[]> = new EventEmitter<File[]>(); // Emit uploaded files

  @ViewChild('fileInput', { static: false }) fileInput!: ElementRef; // Reference to the file input

  files: File[] = [];
  isDragOver: boolean = false;
  isUploading: boolean = false; // Track upload state
  uploadProgress: number = 0; // Track upload progress
  validationMessages: string[] = []; // Store validation messages
  successMessage: string = ''; // Store success message

  handleDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragOver = true;
  }

  handleDragLeave() {
    this.isDragOver = false;
  }

  handleDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragOver = false;
    const droppedFiles = event.dataTransfer?.files;
    if (droppedFiles) {
      this.addFiles(droppedFiles);
    }
  }

  handleFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.addFiles(input.files);
    }
  }

  private addFiles(files: FileList) {
    // Clear previous validation messages and success messages
    this.validationMessages = [];
    this.successMessage = '';

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      // Validate file size and type
      if (file.size > this.maxFileSize) {
        this.validationMessages.push(`File ${file.name} exceeds the maximum size of ${this.maxFileSize / (1024 * 1024)} MB.`);
        continue;
      }

      if (!file.type.match(this.acceptedFileTypes)) {
        this.validationMessages.push(`File ${file.name} is not an accepted type.`);
        continue;
      }

      this.files.push(file);
    }

    // If there are no validation errors, start the upload process
    if (this.validationMessages.length === 0) {
      this.uploadFiles(this.files);
    }
  }

  private uploadFiles(files: File[]) {
    this.isUploading = true;
    this.uploadProgress = 0;

    // Simulate file upload (you should replace this with actual upload logic)
    const totalFiles = files.length;
    files.forEach((file, index) => {
      // Simulate upload delay
      setTimeout(() => {
        this.uploadProgress = ((index + 1) / totalFiles) * 100; // Update progress

        // Emit uploaded files once all have been uploaded
        if (index === totalFiles - 1) {
          this.filesUploaded.emit(this.files);
          this.isUploading = false; // Reset uploading state
          this.successMessage = 'Files uploaded successfully!'; // Set success message
        }
      }, 1000 * (index + 1)); // Simulate different upload times
    });
  }

  // Method to trigger the file input click
  triggerFileInput() {
    this.fileInput.nativeElement.click();
  }

}
