package tools.feedback.source

import java.util.Date;

class Feature {

    static constraints = {
		parent nullable:true
		name blank:false, unique:true
		description nullable:true 
		enabled nullable:false 
		createdOn nullable:false 
		createdBy blank:false
		modifiedOn nullable:true
		modifiedBy nullable:true
    }
	
	static mapping = {
		version false
		name sqlType:'varchar(100)'
		description sqlType:'varchar(2000)'
		createdBy sqlType:'varchar(100)'
		modifiedBy sqlType:'varchar(100)'
	}
	
	static hasMany = [childFeatures:Feature]
	
	Feature parent
	String name
	String description
	Boolean enabled
	Date createdOn
	String createdBy
	Date modifiedOn
	String modifiedBy
}
