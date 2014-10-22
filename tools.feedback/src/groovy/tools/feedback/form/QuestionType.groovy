package tools.feedback.form

enum QuestionType {
	
	SINGLE_CHOICE('SINGLE'),
	MULTI_CHOICE('MULTI'),
	FREE_TEXT('FREE')
	
	private QuestionType(String id) {
		this.id = id
	}
	
	final String id
	
	static QuestionType byId(String id) {
		values().find {
			it.id == id
		}
	}
}
