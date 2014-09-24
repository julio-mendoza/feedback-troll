package tools.feedback.tpl

import java.util.Date;

import tools.feedback.form.QuestionType;

class TplQuestion {

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
	
	static hasMany = [options:TplQuestionOption]
	static belongsTo = [form:TplInfo]
	
	String questionText
	QuestionType type
	Boolean enabled
	Date createdOn
	String createdBy
	Date modifiedOn
	String modifiedBy
}
