import excel4node from 'excel4node';

export function writeToExcel(data) {
    const workbook = new excel4node.Workbook();
    const worksheet = workbook.addWorksheet('Sheet 1');

    const headerStyle = workbook.createStyle({
        font: {
            bold: true,
        },
        fill: {
            type: 'pattern',
            patternType: 'solid',
            fgColor: 'FFFF00',
        },
        border: {
            left: {
                style: 'thin',
                color: 'black'
            },
            right: {
                style: 'thin',
                color: 'black'
            },
            top: {
                style: 'thin',
                color: 'black'
            },
            bottom: {
                style: 'thin',
                color: 'black'
            },
        },
        alignment: {
            horizontal: 'center',
        },
    });

    const contentStyle = workbook.createStyle({
        border: {
            left: {
                style: 'thin',
                color: 'black'
            },
            right: {
                style: 'thin',
                color: 'black'
            },
            top: {
                style: 'thin',
                color: 'black'
            },
            bottom: {
                style: 'thin',
                color: 'black'
            },
        },
    });

    worksheet.cell(1, 1).string('Title').style(headerStyle);
    worksheet.cell(1, 2).string('Description').style(headerStyle);

    let rowIndex = 2;

    for (const item of data) {
        worksheet.cell(rowIndex, 1).string(item.title).style(contentStyle);
        worksheet.cell(rowIndex, 2).string(item.description).style(contentStyle);

        rowIndex++;
    }

    workbook.write('./output/result.xlsx');
}
