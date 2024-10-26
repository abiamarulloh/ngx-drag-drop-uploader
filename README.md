# ngx-easy-drag-uploader Documentation

## Table of Contents

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Usage](#usage)
   - [Importing the Module](#importing-the-module)
   - [Using the Component](#using-the-component)
   - [Handling Uploaded Files](#handling-uploaded-files)
4. [Inputs](#inputs)
5. [Events](#events)
6. [Custom Styling](#custom-styling)
7. [License](#license)
8. [Contributing](#contributing)

## Introduction

`ngx-easy-drag-uploader` is a versatile drag-and-drop file uploader component for Angular applications. It provides users with an intuitive interface to upload files easily, either by dragging them into the designated area or by clicking to select files.

## Installation

To install the `ngx-easy-drag-uploader` library, run the following command:

```bash
npm install ngx-easy-drag-uploader
```

## Usage

### Importing the Module

First, import the `NgxEasyDragUploaderModule` into your Angular application. You can add it in your main `AppModule` or any feature module:

```typescript
import { NgxEasyDragUploaderModule } from 'ngx-easy-drag-uploader';

@NgModule({
  declarations: [ /* your components */ ],
  imports: [
    NgxEasyDragUploaderModule,
    // other imports...
  ],
  bootstrap: [/* your root component */]
})
export class AppModule { }
```

### Using the Component

Now you can use the `<ngx-easy-drag-uploader>` component in your templates. Here’s a basic example:

```html
<ngx-easy-drag-uploader 
  (filesUploaded)="onFilesUploaded($event)" 
  [uploadMessage]="'Drag and drop files here or click to select files'" 
  [filesHeader]="'Uploaded Files:'" 
  [uploadingHeader]="'Uploading files, please wait...'" 
  [validationHeader]="'Please address the following issues:'">
</ngx-easy-drag-uploader>
```

### Handling Uploaded Files

In your component TypeScript file, you can implement the `onFilesUploaded` method to handle the uploaded files:

```typescript
onFilesUploaded(files: File[]) {
  console.log('Uploaded files:', files);
  // Further processing of files...
}
```

## Inputs

The `ngx-easy-drag-uploader` component accepts several inputs that allow you to customize its behavior and appearance:

- **`uploadMessage`**: 
  - Type: `string`
  - Description: Message displayed in the upload area.
  - Default: `'Drag and drop files here or click to select files'`

- **`filesHeader`**: 
  - Type: `string`
  - Description: Header for the list of uploaded files.
  - Default: `'Files:'`

- **`uploadingHeader`**: 
  - Type: `string`
  - Description: Message displayed during the upload process.
  - Default: `'Uploading...'`

- **`validationHeader`**: 
  - Type: `string`
  - Description: Header for validation messages.
  - Default: `'Validation Errors:'`

## Events

The component emits the following events:

- **`filesUploaded`**: 
  - Description: This event is emitted when files are successfully uploaded.
  - Event payload: An array of `File` objects.

```typescript
<ngx-easy-drag-uploader (filesUploaded)="onFilesUploaded($event)"></ngx-easy-drag-uploader>
```

## Custom Styling

You can customize the styling of the uploader component using CSS. To do this, create a CSS file in your project and apply styles to the relevant classes used by the component. For example:

```css
.drag-drop-uploader {
  border: 2px dashed #4CAF50;
  padding: 20px;
  text-align: center;
  background-color: #f9f9f9;
}
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.
