/**
 * 
 */
package controller;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.servlet.ServletContext;

import model.DataSetForm;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.multipart.MultipartFile;

/**
 * @author Yashwanth
 *
 */
@Controller
@SessionAttributes({"columns","heading1","heading2","imgurl","tooltipmessage"})
public class ToolController {
	
	String pathName;
	@Autowired
	ServletContext servletContext;
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String homePage(){
		
		return "home";
	}

	@RequestMapping(value = "/uploadFile", method = RequestMethod.POST)
	public String parseHeadings(ModelMap modelMap, @RequestParam("file") MultipartFile file){
		
		String name;
		DataSetForm heading =  new DataSetForm();
		if(!file.isEmpty()){
			name = file.getOriginalFilename();
			try{
				byte[] fileContent = file.getBytes();
				String rootPath = servletContext.getRealPath("/");
                File dir = new File(rootPath + File.separator +"resources"+ File.separator + "temp");
                if (!dir.exists())
                    dir.mkdirs();
 
                // Create the file on server*/
                pathName = rootPath + File.separator +"resources"+ File.separator + "temp" + File.separator + name;
                File uploadedFile = new File(pathName);
                System.out.println("Path:"+pathName);
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
	            workbook.close();
	            modelMap.addAttribute("columns", heading.getColumns());
			} catch(Exception e){
				System.out.println("Exception Occured:"+e);
			}
		} else {
			//redirect to error page.
		}
		return "dataselect";
	}
	
	@RequestMapping(value = "/parseFile", method = RequestMethod.POST)
	public String parseDataSet(@RequestParam("columnIndex1") int columnIndex1, @RequestParam("columnIndex2") int columnIndex2, @RequestParam("chartid") String chartId, ModelMap modelMap){
			
			String heading1="";
			String heading2="";
			try{
				String rootPath = servletContext.getRealPath("/");
				FileWriter fwriter = new FileWriter(rootPath+File.separator +"resources"+ File.separator + "temp" + File.separator +"data.tsv");
				FileInputStream inputStream = new FileInputStream(pathName);
				System.out.println("output:"+rootPath);
				//Create Workbook instance holding reference to .xlsx file
	            XSSFWorkbook workbook = new XSSFWorkbook(inputStream);
	 
	            //Get first/desired sheet from the workbook
	            XSSFSheet sheet = workbook.getSheetAt(0);
	            //Iterate through each rows one by one
	            Iterator<Row> rowIterator = sheet.iterator();
	            while(rowIterator.hasNext())
	            {
	                Row row = rowIterator.next();
	                if(row.getRowNum() == 0){
	                	Iterator<Cell> cellIterator = row.cellIterator();  
		                while (cellIterator.hasNext())
		                {
		                    Cell cell = cellIterator.next();
		                    if(cell.getColumnIndex() == columnIndex1){
		                    	fwriter.write(cell.getStringCellValue()+"\t");
		                    	heading1 = cell.getStringCellValue();
		                    } else if(cell.getColumnIndex() == columnIndex2){
		                    	fwriter.append(cell.getStringCellValue()+"\n");
		                    	heading2 = cell.getStringCellValue();
		                    }
		                }
	                }
	                else if(row.getRowNum() > 0){
	                	Iterator<Cell> cellIterator = row.cellIterator();  
		                while (cellIterator.hasNext())
		                {
		                    Cell cell = cellIterator.next();
		                    if(cell.getColumnIndex() == columnIndex1){
		                    	fwriter.append(cell.getStringCellValue()+"\t");
		                    	//column1Values.add(cell.getStringCellValue());
		                    } 
		                    else if(cell.getColumnIndex() == columnIndex2){
		                    	fwriter.append(new Double(cell.getNumericCellValue()).intValue()+"\n");
		                    	//column2Values.add(cell.getNumericCellValue());
		                    }
		                }
	                }
	                //For each row, iterate through all the columns
	                
	            }
	            inputStream.close();
	            fwriter.close();
	            workbook.close();
	            modelMap.addAttribute("heading1", heading1);
	            modelMap.addAttribute("heading2", heading2);
	            modelMap.addAttribute("chartid", chartId);
			} catch(Exception e){
				System.out.println("Exception Occured:"+e);
			}
		return "barchart";
	}
	
	@RequestMapping(value = "/uploadimage", method = RequestMethod.POST)
	public String saveImages(ModelMap modelMap, @RequestParam("image") MultipartFile file){
		
		String name;
		if(!file.isEmpty()){
			name = file.getOriginalFilename();
			try{
				byte[] fileContent = file.getBytes();
				String rootPath = servletContext.getRealPath("/");
                File dir = new File(rootPath + File.separator +"resources"+ File.separator + "temp");
                if (!dir.exists())
                    dir.mkdirs();
 
                // Create the file on server*/
                pathName = rootPath + File.separator +"resources"+ File.separator + "temp" + File.separator + name;
                File uploadedFile = new File(pathName);
                System.out.println("Path:"+pathName);
				BufferedOutputStream outStream = new BufferedOutputStream(new FileOutputStream(uploadedFile));
				outStream.write(fileContent);
				outStream.close();
				modelMap.addAttribute("imgurl", name);
			} catch(Exception e){
				System.out.println("Exception Occured:"+e);
			}
		} else {
			//redirect to error page.
		}
		return "image";
	}
	
	@RequestMapping(value = "/customtooltip", method = RequestMethod.POST)
	public String customizeTooltip(ModelMap modelMap, @RequestParam("formatstring") String tooltip, @RequestParam("chartid") String chartId){
		
		System.out.println("heading1:"+modelMap.get("heading1")+" heading2:"+modelMap.get("heading2"));
		StringBuffer tooltipmesg = new StringBuffer();
		if(tooltip.length()>0){
			tooltip = tooltip.replace("xval", "\"+d."+modelMap.get("heading1")+"+\"");
			tooltip = tooltip.replace("yval", "\"+d."+modelMap.get("heading2")+"+\"");
			tooltipmesg.append(tooltip);
			//tooltipmesg.append("\"");
		System.out.println("tooltipmessage:"+tooltipmesg.toString());	
		} else {
			//redirect to error page.
		}
		modelMap.addAttribute("tooltipmessage", tooltipmesg);
		modelMap.addAttribute("chartid", chartId);
		return "barchartwithtip";
	}
	
	@RequestMapping(value = "/createFilter", method = RequestMethod.GET)
	public String customizeTooltip(){

		return "dynamicbtn";
	}
}
