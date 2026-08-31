import * as XLSX from "xlsx";
import * as path from "path";

export class ExcelReader {

    // Get one row using TestCase
    static getRow(
        fileName: string,
        sheetName: string,
        testCase: string
    ): Record<string, string> {

        const filePath = path.join(
            process.cwd(),
            "test-data",
            fileName
        );

        const workbook = XLSX.readFile(filePath);

        const worksheet = workbook.Sheets[sheetName];

        if (!worksheet) {
            throw new Error(
                `Sheet "${sheetName}" not found in ${fileName}`
            );
        }

        const data =
            XLSX.utils.sheet_to_json<Record<string, string>>(worksheet, {
                defval: ""
            });

        const row = data.find(
            (item) => item.TestCase === testCase
        );

        if (!row) {
            throw new Error(
                `Test case "${testCase}" not found in ${fileName}`
            );
        }

        return row;
    }


    // Get all rows from Excel
    static getData(
        filePath: string,
        sheetName: string
    ): Record<string, string>[] {

        const workbook = XLSX.readFile(filePath);

        const worksheet = workbook.Sheets[sheetName];

        if (!worksheet) {
            throw new Error(
                `Sheet "${sheetName}" not found in ${filePath}`
            );
        }

        const data =
            XLSX.utils.sheet_to_json<Record<string, string>>(worksheet, {
                defval: ""
            });

        return data;
    }
}