package tools.feedback.form

import java.util.Date;

class FormQuestion {

    static constraints = {
		questionText blank:false
		type nullable:false
		enabled nullable:false
		createdOn nullable:false
		createdBy blank:false
		modifiedOn nullable:true
		modifiedBy nullable:true
    }
	
	static mapping = {
		version false
		questionText sqlType:'varchar(2000)'
		createdBy sqlType:'varchar(100)'
		modifiedBy sqlType:'varchar(100)'
	}
	
	static hasMany = [options:QuestionOption]
	static belongsTo = [form:FormConfig]
	
	String questionText
	QuestionType type
	Boolean enabled
	Date createdOn
	String createdBy
	Date modifiedOn
	String modifiedBy
}
