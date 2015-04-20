/**
 * 
 */
package model;

import java.util.ArrayList;
import java.util.List;

/**
 * @author Yashwanth
 *
 */
public class DataSetForm {
	private List<String> columns;// = new ArrayList<E>();

	public DataSetForm() {
		columns = new ArrayList<String>();
	}

	/**
	 * @return the columns
	 */
	public List<String> getColumns() {
		return columns;
	}

	/**
	 * @param columns the columns to set
	 */
	public void setColumns(List<String> columns) {
		this.columns = columns;
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		StringBuilder dataSetString = new StringBuilder("Headings:");
		for(String value:columns){
			dataSetString.append(value);
			dataSetString.append(",");
		}
		return dataSetString.substring(0, dataSetString.length()-2);
	}
	
}
