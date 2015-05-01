import Ember from 'ember';

export default Ember.Mixin.create({
	getAttempts:function  () {
		return [{
            id: 1,
            moreInfo:{
            	failCause: "Wymuszenie"	
            }            
        },
        {
            id: 2,
            moreInfo:{
            	failCause: "Jazda pod prąd"	
            }            
        },
        {
            id: 3,
            moreInfo:{
            	failCause: "Wymuszenie"	
            }            
        },
        {
            id: 4,
            moreInfo:{
            	failCause: "Wymuszenie"	
            }            
        },
        {
            id: 5,
            moreInfo:{
            	failCause: "Wymuszenie"	
            }            
        },
        {
            id: 6,
            moreInfo:{
            	failCause: "Wymuszenie"	
            }            
        }];
	}
});
