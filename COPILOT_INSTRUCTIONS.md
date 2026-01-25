# Project Instructions - READ BEFORE MAKING ANY CHANGES

## PROJECT SCOPE

This is a SIMPLE TypeScript demonstration project. Total code: ~100-150 lines in 2-3 files maximum.

## STRICT RULES - DO NOT VIOLATE

### ❌ DO NOT:

* Create more than 3 files total
* Add Express, HTTP servers, or any web frameworks
* Create multiple folders/modules
* Add complex dependencies beyond: typescript, ts-node, @types/node, (optionally: eslint, jest)
* Refactor into separate modules/files
* Add databases, ORMs, or external storage
* Create API routes, controllers, middleware, or services
* Add authentication, validation libraries, or complex error handling frameworks
* Suggest "improvements" that add complexity

### ✅ DO:

* Keep everything in ONE main file: `fileManager.ts`
* Use Node.js `fs` module for file operations
* Use simple in-memory data structures (Arrays, Maps)
* Add clear comments showing where each requirement is demonstrated
* Keep it simple and functional

## REQUIRED FILES ONLY:

1. `fileManager.ts` - Main code (100-150 lines)
2. `tsconfig.json` - TypeScript config
3. `package.json` - Dependencies (minimal)
4. (Optional) `.eslintrc.json` or `jest.config.js` - Only if doing stretch challenges

## CORE REQUIREMENTS TO DEMONSTRATE:

Every change must maintain these demonstrations:

1. ✅ **Variables with data types** - Explicit type annotations
2. ✅ **Functions with data types** - Typed parameters and returns
3. ✅ **Classes** - At least one class (FileManager)
4. ✅ **Arrays** - Typed arrays like `string[]` or `Array<FileMetadata>`
5. ✅ **Tuples** - Fixed-length typed arrays like `[string, number, Date]`

## STRETCH CHALLENGE (Pick One):

* Exception handling with try-catch
* ESLint configuration
* Jest testing

## FUNCTIONALITY:

* Upload files (copy to ./uploads folder)
* Download files (copy from ./uploads folder)
* List uploaded files
* Track file metadata (name, size, date)
* Handle errors gracefully

## ARCHITECTURE:

```
fileManager.ts structure:
  1. Imports (fs, path)
  2. Type definitions/interfaces
  3. Helper functions (2-3 max)
  4. FileManager class
  5. Demo/usage code at bottom
```

## WHEN MAKING CHANGES:

1. Read this file first
2. Only modify existing files, don't create new ones
3. Keep total line count under 200
4. Maintain all 5 core requirements
5. Test that it still runs with `ts-node fileManager.ts`

## IF YOU'RE ABOUT TO:

* "Refactor into separate modules" → STOP, keep in one file
* "Add Express for the server" → STOP, no HTTP server needed
* "Create a routes folder" → STOP, no routing needed
* "Add a database" → STOP, use in-memory storage
* "Install 15 new packages" → STOP, keep dependencies minimal
