package tools.feedback.form

import java.util.Date;

class QuestionOption {

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
	
	static belongsTo = [question:FormQuestion]
	
	String optionText
	Boolean enabled
	Date createdOn
	String createdBy
	Date modifiedOn
	String modifiedBy
}
