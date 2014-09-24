package tools.feedback.source

import grails.converters.JSON
import grails.converters.XML

class FeaturesController {

	def featureService
	
	def list() {
		def listResult = featureService.retrieveAll()
		withFormat {
			json { render listResult as JSON }
			xml { render listResult as XML }
		}
	}
	
	def show(long id) {
		def objResult = featureService.retrieveById(id)
		if (!objResult.data) {
			withFormat {
				json { response.sendError(404) }
				xml { response.sendError(404) }
			}
			return
		}
		withFormat {
			json { render objResult as JSON }
			xml { render objResult as XML }
		}
	}
	
	def save() {
		
	}
	
	def update() {
		
	}
	
	def delete() {
		
	}
}
