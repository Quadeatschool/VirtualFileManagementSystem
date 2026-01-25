// 1. Define a basic type
// type FileSize = number;

// class FileSystem {
    // 2. An Array with a Data Type
    // private files: string[] = [];

    // 3. A Function with Data Types
    // upload(name: string, size: FileSize): void {
        // this.files.push(name);
        // // console.log(`Uploaded ${name} (${size} bytes). Total files: ${this.files.length}`);
    // }
// }

// const myServer = new FileSystem();
// myServer.upload("test-document.txt", 1024);



// -----------------------------------------------------



// 1. Tuple: A fixed-length array representing [FileName, FileSize]
type FilePacket = [string, number];

class FileSystem {
    private files: string[] = [];
    private storageLimit: number = 5000; // Max 5000 bytes
    private currentSize: number = 0;

    // 2. Function using the Tuple and Data Types
    upload(packet: FilePacket): void {
        const [name, size] = packet;

        // 3. Stretch Goal: Throwing an Exception
        if (this.currentSize + size > this.storageLimit) {
            throw new Error(`Upload Failed! ${name} is too large for remaining space.`);
        }

        this.files.push(name);
        this.currentSize += size;
        console.log(`Successfully uploaded ${name}. Total storage: ${this.currentSize} bytes.`);
    }
}

const myServer = new FileSystem();

// 4. Using the logic with a Try/Catch (Handling the Exception)
try {
    myServer.upload(["my-big-video.mp4", 6000]); // This will trigger the error
} catch (error: any) {
    console.error("ALERT:", error.message);
}

// This one will work
myServer.upload(["notes.txt", 100]);