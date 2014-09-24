package tools.feedback.source

import grails.transaction.Transactional

@Transactional
class FeatureService {

	@Transactional(readOnly = true) 
    def retrieveAll() {
		def features = Feature.list()
		[data: features]
    }
	
	@Transactional(readOnly = true)
	def retrieveById(featureId) {
		def feature = Feature.get(featureId)
		[data: feature]
	}
}
