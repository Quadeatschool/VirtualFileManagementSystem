// 1. Define a basic type
type FileSize = number;

class FileSystem {
    // 2. An Array with a Data Type
    private files: string[] = [];

    // 3. A Function with Data Types
    upload(name: string, size: FileSize): void {
        this.files.push(name);
        console.log(`Uploaded ${name} (${size} bytes). Total files: ${this.files.length}`);
    }
}

const myServer = new FileSystem();
myServer.upload("test-document.txt", 1024);