package tools.feedback.tpl

import java.util.Date;

class TplInfo {

    static constraints = {
		name blank:false, unique:true
		title blank:false
		description blank:true
		enabled nullable:false
		createdOn nullable:false
		createdBy blank:false
		modifiedOn nullable:true
		modifiedBy nullable:true
    }
	
	static mapping = {
		version(false)
		name sqlType:'varchar(100)', length: 100
		title sqlType:'varchar(255)', length: 255
		description sqlType:'text'
		createdBy sqlType:'varchar(100)'
		modifiedBy sqlType:'varchar(100)'
	}
	
	static hasMany = [questions:TplQuestion]
	
	String name
	String title
	String description
	Boolean enabled
	Date createdOn
	String createdBy
	Date modifiedOn
	String modifiedBy
}
