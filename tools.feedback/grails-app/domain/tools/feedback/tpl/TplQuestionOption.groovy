package tools.feedback.tpl

import java.util.Date;

class TplQuestionOption {

    static constraints = {
		optionText blank:false
		enabled nullable:false
		createdOn nullable:false
		createdBy blank:false
		modifiedOn nullable:true
		modifiedBy nullable:true
    }
	
	static mapping = {
		version false
		optionText sqlType:'varchar(2000)'
		createdBy sqlType:'varchar(100)'
		modifiedBy sqlType:'varchar(100)'
	}
	
	static belongsTo = [question:TplQuestion]
	
	String optionText
	Boolean enabled
	Date createdOn
	String createdBy
	Date modifiedOn
	String modifiedBy
}
