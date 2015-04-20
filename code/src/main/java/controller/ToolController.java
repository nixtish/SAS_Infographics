/**
 * 
 */
package controller;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.util.Iterator;

import model.DataSetForm;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

/**
 * @author Yashwanth
 *
 */
@Controller
public class ToolController {
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String homePage(){
		
		return "index";
	}

	@RequestMapping(value = "/parseFile", method = RequestMethod.POST)
	public String parseDataSet(ModelMap modelMap, @RequestParam("file") MultipartFile file){
		String name = "sample.xlsx";
		DataSetForm heading =  new DataSetForm();
		if(!file.isEmpty()){
			try{
				byte[] fileContent = file.getBytes();
				String rootPath = System.getProperty("catalina.home");
                File dir = new File(rootPath + File.separator + "tmpFiles");
                if (!dir.exists())
                    dir.mkdirs();
 
                // Create the file on server
                File uploadedFile = new File(dir.getAbsolutePath() + File.separator + name);
				BufferedOutputStream outStream = new BufferedOutputStream(new FileOutputStream(uploadedFile));
				outStream.write(fileContent);
				outStream.close();
				FileInputStream inputStream = new FileInputStream(uploadedFile);
				//Create Workbook instance holding reference to .xlsx file
	            XSSFWorkbook workbook = new XSSFWorkbook(inputStream);
	 
	            //Get first/desired sheet from the workbook
	            XSSFSheet sheet = workbook.getSheetAt(0);
	 
	            //Iterate through each rows one by one
	            Iterator<Row> rowIterator = sheet.iterator();
	            if (rowIterator.hasNext())
	            {
	                Row row = rowIterator.next();
	                //For each row, iterate through all the columns
	                Iterator<Cell> cellIterator = row.cellIterator();  
	                while (cellIterator.hasNext())
	                {
	                    Cell cell = cellIterator.next();
	                    heading.getColumns().add(cell.getStringCellValue());
	                }
	            }
	            inputStream.close();
	            modelMap.addAttribute("headings", heading.getColumns().toString());
			} catch(Exception e){
				System.out.println("Exception Occured:"+e);
			}
		} else {
			//redirect to error page.
		}
		return "output";
	}
}
