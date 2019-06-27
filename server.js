var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });
var http = require("http");
const express = require('express');
const app = express();
const _dirname = 'C:/Users/Patient/Desktop/Test_html/Kriptowährung/';
const fetch = require ('node-fetch');
const {data, transfer, broadcast, setScript}  = require('@waves/waves-transactions');
const compile = require('@waves/ride-js');
let adr1 ='';
let seed = '';
const WavesAPI = require('waves-api');
var request2 = require('request');
const Waves = WavesAPI.create(WavesAPI.TESTNET_CONFIG);
var request = require('sync-request');
var projectAdress ='';
let textOption = 0;
let textCriteria = 0;
let seedEnterByAdmin = "";
let seedadmin = "";
let seedEnterByUser = "";
let adminPublickey ="";



		
app.use(express.static(_dirname + 'public'));
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');

app.get(['/', '/pass.html'], function(req, res){
	
		
	
})

app.get('/public/index.css', function(req, res){
	
	res.sendFile(_dirname + 'public/index.css');	
	
})
app.get('/public/index.js', function(req, res){
	
	res.sendFile(_dirname + 'public/index.js');	
	
})
 var resultat="";
app.post('/top', function(req, res1){ 
	
	
	seedadmin = "collect dilemma memory volume media friend shield better reduce steel aspect cake";
	//adminPublickey  = seedadmin.keyPair.publicKey;

	function function1() {			 
		seed = Waves.Seed.create();
		
		console.log("Generated adress projekt address "+ seed.address );
		//Transfering a WAVES
	
		 
		 
		let params1 = {
		  amount: 1000000000,
		  recipient: seed.address,
		  
		} ;

		const signedTransferTx = transfer(params1, seedadmin);
		

		var res = request('POST', 'https://testnodes.wavesnodes.com/transactions/broadcast', {
		  json:  signedTransferTx,
		});
		var user = JSON.parse(res.getBody('utf8'));
		if (!res.getBody('utf8')){
						console.log("you must recharge your account") ;
						res.redirect('/public/index12.html');
						
						}else{
							console.log("sa marche");
						}
		console.log(user);
		projectAdress = seed.address;
		
		 console.log(projectAdress);
		 
		  
	}
	
	function contract(){
		 adr1 = seed.phrase; 
			 	const str =`
		let admin  = base58'A84RrM74unycVZ1qSeU2DwoXAHt1g823LFcxELDtzDRw'

			match tx { 
			  case t:DataTransaction =>
			if(sigVerify(tx.bodyBytes, tx.proofs[1], admin  ))then true else false
			  case _ => true
			}` ;
			
		var stre =compile.compile(str) ;
		const params = {
  
		   script: stre.result.base64 ,
		    
			
			 timestamp: Date.now(),
			 
		     //fee: 100000000,
			 chainId: 'Testnet'
		   } ;
		  
		 var signedSetScriptTx =  setScript(params,adr1) ;
		//console.
		 //const transferSidnedWithTwoParties = setScript(signedSetScriptTx, seed) ;
		// console.log(signedSetScriptTx );
		 const nodeUrl = 'https://testnodes.wavesnodes.com/transactions/broadcast';
		 broadcast(signedSetScriptTx, nodeUrl).then(resp => console.log(resp)) 
	}
	
	
	function function2() {
		 let question = req.body.question;
		  seedEnterByAdmin =   req.body.idseedd;
				let params2 = {
				"version":1,
				"sender":"string",
				  data: [ 
				  {key: 'question', type: 'string', value: question}
				 ],
			  
			  fee: 10000000 ,
				timestamp: Date.now()
			
			};		
		
			const signedDataTx = data(params2, adr1);
			const transferSidnedWithTwoParties = data(signedDataTx , seedEnterByAdmin) ;
			var res = request('POST', 'https://testnodes.wavesnodes.com/transactions/broadcast', {
			  json:  transferSidnedWithTwoParties,
			});
			
			 resultat = JSON.parse(res.getBody('utf8'));
			
			console.log(resultat);
			
	}
	
	 
	function redirect(){
		if (!resultat){
				res1.redirect('/index.html');
			}else{
			res1.redirect('/index1.html');
	}};
	function1();
	 setTimeout(contract, 10000);
	 setTimeout(function2, 20000);
	 setTimeout(redirect,30000);
}) 				

app.post('/top1', function(req, res){ 
	
	function contract(){
		
		const str = `

				let admin  = base58'A84RrM74unycVZ1qSeU2DwoXAHt1g823LFcxELDtzDRw'
				let user1  = base58'8QVupygag3ABQbE2jj4rzZbNFHLob6f3H2XPTzxdhvu6'
				let user2  = base58'8zsyS2UtbcnH1KqwoGEHf1uJGTeDms3syVkXuB5UQTZo'
				match tx { 
				  case t:DataTransaction =>
				if((sigVerify(tx.bodyBytes, tx.proofs[1], admin  )) || (sigVerify(tx.bodyBytes, tx.proofs[1], user1  )) || (sigVerify(tx.bodyBytes, tx.proofs[1], user2  ))) then true else false
				  case _ => true
				}` ;
        var stre =compile.compile(str) ;
		const params = {
  
		   script: stre.result.base64 ,
		    
			
			 timestamp: Date.now(),
			 
		     fee: 1500000,
			 chainId: 'Testnet'
		   } ;
		  
		 var signedSetScriptTx =  setScript(params,adr1) ;
		//console.
		 //const transferSidnedWithTwoParties = setScript(signedSetScriptTx, seed) ;
		// console.log(signedSetScriptTx );
		 const nodeUrl = 'https://testnodes.wavesnodes.com/transactions/broadcast';
		 broadcast(signedSetScriptTx, nodeUrl).then(resp => console.log(resp)) 
		
	}
		 
	function dat(){	 
		 let params1 = [];
			
		 let op1 = req.body.option1; //option1 is the name of your input box
		 let op2 = req.body.option2;
		 let op3 = req.body.option3;
		 let op4 = req.body.option4;
		seedEnterByUser = req.body.seeduser;
		console.log("voici le seed entre par u " +seedEnterByUser);
		 
		 if (op1 != '' && op2 != '' && op3 != '' && op4 != ''){
			 
				 params1 = {
				"version":1,
				"sender":"string",
				  data: [ 
				  {key: 'option1', type: 'string', value: op1}, 
				  {key: 'option2', type: 'string', value: op2},
				  {key: 'option3', type: 'string', value: op3},
				  {key: 'option4', type: 'string', value: op4}
				 ],
			  
			  fee: 10000000 ,
				timestamp: Date.now()
			
			};
		 };
		 if (op1 != '' && op2 != '' && op3 != '' && op4 == ''){
			 
				params1 = {
				"version":1,
				"sender":"string",
				  data: [ 
				  {key: 'option1', type: 'string', value: op1}, 
				  {key: 'option2', type: 'string', value: op2},
				  {key: 'option3', type: 'string', value: op3}
				 ],
			  
			  fee: 10000000 ,
				timestamp: Date.now()
			
			};
		 };
		 if (op1 != '' && op2 != '' && op3 == '' && op4 == ''){
			 
				params1 = {
				"version":1,
				"sender":"string",
				  data: [ 
				 
				  {key: 'option1', type: 'string', value: op1}, 
				  {key: 'option2', type: 'string', value: op2}
				 ],
			  
			  fee: 10000000 ,
				timestamp: Date.now()
			
			};
		 };
		  if (op1 != '' && op2 == '' && op3 == '' && op4 == ''){
			 
				params1 = {
				"version":1,
				"sender":"string",
				  data: [ 				 
				  {key: 'option1', type: 'string', value: op1}
				 ],
			  
			  fee: 10000000 ,
				timestamp: Date.now()
			
			};
		 };		 
		
			const signedDataTx = data(params1, adr1);
			const transferSidnedWithTwoParties = data(signedDataTx , seedEnterByUser) ;
		
           
			var res2222 = request('POST', 'https://testnodes.wavesnodes.com/transactions/broadcast', {
			  json:  transferSidnedWithTwoParties,
			});
			var resultat = JSON.parse(res2222.getBody('utf8'));
			console.log(resultat);
	}
	
	 
	function redirect(){
		if (!resultat){
				res.redirect('/index.html');
			}else{
			res.redirect('/getform2.html');
	}};
	 contract();
	 setTimeout(dat, 20000);
	 setTimeout(redirect,30000);
	
}) 		

	app.post('/bottom', function(req, res){ 
		 let paramsb = [];
		 let Name_of_Creterion1 = req.body.kreterium12;
		 let evaluation = req.body.kreterium13;
		 
		 let Name_of_Creterion2 = req.body.kreterium22;
		 let evaluation1 = req.body.kreterium23;
		 
		 let Name_of_Creterion3 = req.body.kreterium32;
		 let evaluation2 = req.body.kreterium33;
		
		 let NCreterion4 = req.body.kreterium42;
		 let evaluation3 = req.body.kreterium43;
		 
		 let NCreterion5 = req.body.kreterium52;
		 let evaluation4 = req.body.kreterium53;
		 
		 if (Name_of_Creterion1 != '' && Name_of_Creterion2 != '' && Name_of_Creterion3 != '' && NCreterion4 != ''&& NCreterion5 != ''){
			      paramsb = {
				"version":1,
				"sender":"string",
				  data: [
				  {key: 'creterion1', type: 'string', value: Name_of_Creterion1 },
				  {key: 'creterion2', type: 'string', value: Name_of_Creterion2 },
				  {key: 'creterion3', type: 'string', value: Name_of_Creterion3 },
				  {key: 'creterion4', type: 'string', value: NCreterion4 },
				  {key: 'creterion5', type: 'string', value: NCreterion5 },			  
				  {key: 'evaluation_creterion1', type: 'integer', value: parseInt(evaluation, 10) },				  
				  {key: 'evaluation_creterion2', type: 'integer', value: parseInt(evaluation1, 10) },
				  {key: 'evaluation_creterion3', type: 'integer', value: parseInt(evaluation2, 10) },
				  {key: 'evaluation_creterion4', type: 'integer', value: parseInt(evaluation3, 10) },
				  {key: 'evaluation_creterion5', type: 'integer', value: parseInt(evaluation4, 10) }
				 ],
			  
				  fee: 10000000 ,
					timestamp: Date.now()
				
				};	
		 };
		 if (Name_of_Creterion1 != '' && Name_of_Creterion2 != '' && Name_of_Creterion3 != '' && NCreterion4 != ''&& NCreterion5 == ''){
			      paramsb = {
				"version":1,
				"sender":"string",
				  data: [
				  {key: 'creterion1', type: 'string', value: Name_of_Creterion1 },
				  {key: 'creterion2', type: 'string', value: Name_of_Creterion2 },
				  {key: 'creterion3', type: 'string', value: Name_of_Creterion3 },
				  {key: 'creterion4', type: 'string', value: NCreterion4 },
				 			  
				  {key: 'evaluation_creterion1', type: 'integer', value: parseInt(evaluation, 10) },				  
				  {key: 'evaluation_creterion2', type: 'integer', value: parseInt(evaluation1, 10) },
				  {key: 'evaluation_creterion3', type: 'integer', value: parseInt(evaluation2, 10) },
				  {key: 'evaluation_creterion4', type: 'integer', value: parseInt(evaluation3, 10) }
				 
				 ],
			  
				  fee: 10000000 ,
					timestamp: Date.now()
				
				};	
		 };
		 if (Name_of_Creterion1 != '' && Name_of_Creterion2 != '' && Name_of_Creterion3 != '' && NCreterion4 == ''&& NCreterion5 == ''){
			      paramsb = {
				"version":1,
				"sender":"string",
				  data: [
				  {key: 'creterion1', type: 'string', value: Name_of_Creterion1 },
				  {key: 'creterion2', type: 'string', value: Name_of_Creterion2 },
				  {key: 'creterion3', type: 'string', value: Name_of_Creterion3 },
				
				 			  
				  {key: 'evaluation_creterion1', type: 'integer', value: parseInt(evaluation, 10) },				  
				  {key: 'evaluation_creterion2', type: 'integer', value: parseInt(evaluation1, 10) },
				  {key: 'evaluation_creterion3', type: 'integer', value: parseInt(evaluation2, 10) }
				 
				 
				 ],
			  
				  fee: 10000000 ,
					timestamp: Date.now()
				
				};	
		 };
		 if (Name_of_Creterion1 != '' && Name_of_Creterion2 != '' && Name_of_Creterion3 == '' && NCreterion4 == ''&& NCreterion5 == ''){
			      paramsb = {
				"version":1,
				"sender":"string",
				  data: [
				  {key: 'creterion1', type: 'string', value: Name_of_Creterion1 },
				  {key: 'creterion2', type: 'string', value: Name_of_Creterion2 },				 			  
				  {key: 'evaluation_creterion1', type: 'integer', value: parseInt(evaluation, 10) },				  
				  {key: 'evaluation_creterion2', type: 'integer', value: parseInt(evaluation1, 10) }			 
				 
				 ],
			  
				  fee: 10000000 ,
					timestamp: Date.now()
				
				};	
		 };
		  if (Name_of_Creterion1 != '' && Name_of_Creterion2 == '' && Name_of_Creterion3 == '' && NCreterion4 == ''&& NCreterion5 == ''){
			      paramsb = {
				"version":1,
				"sender":"string",
				  data: [
				  {key: 'creterion1', type: 'string', value: Name_of_Creterion1 },				 			  
				  {key: 'evaluation_creterion1', type: 'integer', value: parseInt(evaluation, 10) }			 
				 
				 ],
			  
				  fee: 10000000 ,
					timestamp: Date.now()
				
				};	
		 };
		 
				
			const signedDataTx12 = data(paramsb, adr1);
			 
			
			const transferSidnedWithTwoParties = data(signedDataTx12 , seedEnterByUser) ;
			var res33 = request('POST', 'https://testnodes.wavesnodes.com/transactions/broadcast', {
			  json:  transferSidnedWithTwoParties,
			});
			var resultat = JSON.parse(res33.getBody('utf8'));
			console.log(resultat); 
			
		 res.redirect('/result.html');
		
	
	}) ;
	

	


let res = '';
let  reqBody = '';
var optionvalue = [];
var kriterionvalue = [];
var optionscore = [];
var optionkey = [] ;
	
function getbody(){
 
}
module.exports = {
		function getoptionvalue(){
		res44 = request('GET', 'https://testnode4.wavesnodes.com/addresses/data/' + projectAdress);
		console.log(res44.getBody());
		var  reqBody = JSON.parse(res44.getBody('utf8'));
		console.log("Retourne ca" +reqBody);
		console.log("voila ca mois  :"+adr1 + "    " + projectAdress);
		var  i = 0 ;
		while ( i < reqBody.length ){
			
		if (reqBody[i].key.indexOf('creterion')== 0){
			
			 kriterionvalue.push(reqBody[i].value);
		}	;

		if (reqBody[i].key.indexOf('option')== 0){

		console.log('Options Key: '+reqBody[i].key);
		console.log('value :');
		console.log(reqBody[i].value);


		var optionsum = 0 ;
		var  j = 0 ;
		while ( j < reqBody.length ){

		if (reqBody[j].key.indexOf('creterion')== 0){

		   console.log('creterion Key : '+reqBody[j].key);
		   console.log('value :');
		   console.log(reqBody[j].value);
		  
		   var sum = 0 ;
		   var  k= 0 ;
		   while ( k < reqBody.length ){

			   if ((reqBody[k].key.indexOf(reqBody[j].key)>-1)&&(reqBody[k].key.indexOf(reqBody[i].key)>-1)){
				   console.log('Connexion key : '+reqBody[k].key);
				   console.log('value :');
				   console.log(reqBody[k].value);
				   var l = 0; 
				   while ( l < reqBody.length ){

					   if ((reqBody[l].key.indexOf(reqBody[j].key)> 0)&&(reqBody[l].key.indexOf('evaluation')== 0)){
						   console.log('Evaluation key : '+reqBody[l].key);
						   console.log('value :');
						   console.log(reqBody[l].value);
						   sum = reqBody[l].value * reqBody[k].value ;
						   optionsum = optionsum +sum ;
						   console.log('multiplication '+reqBody[l].key+' and '+reqBody[k].key+' : ');
						   console.log(sum) ;
					   }
					   l++ ;
					  

				   } 
			   }
			   k++;
		   
		   }  


		}     
		j++;


		}


		console.log('Sum of '+reqBody[i].key+' : ');
		console.log(optionsum);
		optionscore.push(optionsum) ;
		optionkey.push(reqBody[i].key);
		optionvalue.push(reqBody[i].value);

		}

		i++;


		}
		}
}

////////////////////////////////////////////////

function printoptions(){

var i = 0 ;
for( i=0; i<optionscore.length; i++){  

console.log('Sum of '+optionkey[i]+' value '+ optionvalue[i])
console.log(optionscore[i]);
}
}

function bestoption(){
var i = 0 ;
var max = 0 ;
for( i=0; i<optionscore.length; i++){  

if(optionscore[i]>optionscore[max]){ 
max = i ;

}

}
var str = "The best Option is : " + optionkey[max]+' with value '+ optionvalue[max]+ ' and his Score is: '+ optionscore[max];
console.log("The best Option is : " + optionkey[max]+' with value '+ optionvalue[max]+ ' and his Score is : ')  
console.log(optionscore[max]);
return str;
}
function wait(){
	i=9000;
	while(i>0)
		i--;
	
	
}


app.get('/form', function (req, res) {
		getoptionvalue() ;
		var i = optionvalue.length;	
		var j = kriterionvalue.length;
		console.log("Voici la taille du vecteur d option est "+i);
		console.log("Voici la valeur de elle meme "+optionvalue[0]);
		console.log("Voici la taille du vecteur de critere "+j);
		console.log("Voici la valeur du critere est: "+kriterionvalue[0]);

	
	
  var html='';
  html +="<body>";
 
	  html += "<form action='/thank'  method='post' name='form1'>";
	  html += "<h2> Please give your evaluation to wight or connexion betwen criteria and options</h2></br>"
	if (i==4){
		
	  html += "Connexion between criterion: "+ kriterionvalue[0]+" and option(S): </br>"
	  html += optionvalue[0]+":<input type='text' id='Connexion1'  name='Connexion1'></p>";
	  html += optionvalue[1]+":<input type='text' id='Connexion2'  name='Connexion2'></p>";
	  html += optionvalue[2]+":<input type='text' id='Connexion3'  name='Connexion3'></p>";
	  html += optionvalue[3]+":<input type='text' id='Connexion4'  name='Connexion4'></p></br></br>";
	  if(typeof kriterionvalue[1] !== "undefined"){
		  
		      html += "Connexion between criterion: "+kriterionvalue[1]+" and option(S): </br>"
			  html += optionvalue[0]+":<input type= 'text' id='Connexion5'  name='Connexion5'></p>";
			  html += optionvalue[1]+":<input type='text' id='Connexion6'  name='Connexion6'></p>";
			  html += optionvalue[2]+":<input type='text' id='Connexion7'  name='Connexion7'></p>";
			  html += optionvalue[3]+":<input type='text' id='Connexion8'  name='Connexion8'></p></br></br>";
		  
	  }
	  if(typeof kriterionvalue[2] !== "undefined"){
		  
		      html += "Connexion between criterion: "+kriterionvalue[2]+" and option(S): </br>"
			  html += optionvalue[0]+":<input type= 'text' id='Connexion9'  name='Connexion9'></p>";
			  html += optionvalue[1]+":<input type='text' id='Connexion10'  name='Connexion10'></p>";
			  html += optionvalue[2]+":<input type='text' id='Connexion11'  name='Connexion11'></p>";
			  html += optionvalue[3]+":<input type='text' id='Connexion12'  name='Connexion12'></p></br></br>";
		   
	  }
	  if(typeof kriterionvalue[3] !== "undefined"){
		  
		      html += "Connexion between criterion: "+kriterionvalue[3]+" and option(S): </br>"
			  html += optionvalue[0]+":<input type= 'text' id='Connexion13'  name='Connexion13'></p>";
			  html += optionvalue[1]+":<input type='text' id='Connexion14'  name='Connexion14'></p>";
			  html += optionvalue[2]+":<input type='text' id='Connexion15'  name='Connexion15'></p>";
			  html += optionvalue[3]+":<input type='text' id='Connexion16'  name='Connexion16'></p></br></br>";
		  
	  }
	  if(typeof kriterionvalue[4] !== "undefined"){
		  
		      html += "Connexion between criterion: "+kriterionvalue[4]+" and option(S): </br>"
			  html += optionvalue[0]+":<input type= 'text' id='Connexion17'  name='Connexion17'></p>";
			  html += optionvalue[1]+":<input type='text' id='Connexion18'  name='Connexion18'></p>";
			  html += optionvalue[2]+":<input type='text' id='Connexion19'  name='Connexion19'></p>";
			  html += optionvalue[3]+":<input type='text' id='Connexion20'  name='Connexion20'></p></br></br>";
		  
	}
};
if (i==3){
		  
				
	  html += "Connexion between criterion: "+kriterionvalue[0]+" and option(S): </br>"
	  html += optionvalue[0]+":<input type= 'text' id='Connexion1'  name='Connexion1'></p>";
	  html += optionvalue[1]+":<input type='text' id='Connexion2'  name='Connexion2'></p>";
	  html += optionvalue[2]+":<input type='text' id='Connexion3'  name='Connexion3'></p></br></br>";
	  if(typeof kriterionvalue[1] !== "undefined"){
		  
		      html += "Connexion between criterion: "+kriterionvalue[1]+" and option(S): </br>"
			  html += optionvalue[0]+":<input type= 'text' id='Connexion4'  name='Connexion4'></p>";
			  html += optionvalue[1]+":<input type='text' id='Connexion5'  name='Connexion5'></p>";
			  html += optionvalue[2]+":<input type='text' id='Connexion6'  name='Connexion6'></p></br></br>";
		  
	  }
	  if(typeof kriterionvalue[2] !== "undefined"){
		  
		      html += "Connexion between criterion: "+kriterionvalue[2]+" and option(S): </br>"
			  html += optionvalue[0]+":<input type= 'text' id='Connexion7'  name='Connexion7'></p>";
			  html += optionvalue[1]+":<input type='text' id='Connexion8'  name='Connexion8'></p>";
			  html += optionvalue[2]+":<input type='text' id='Connexion9'  name='Connexion9'></p></br></br>";
		  
	  }
	  if(typeof kriterionvalue[3] !== "undefined"){
		  
		      html += "Connexion between criterion: "+kriterionvalue[3]+" and option(S): </br>"
			  html += optionvalue[0]+":<input type= 'text' id='Connexion10'  name='Connexion10'></p>";
			  html += optionvalue[1]+":<input type='text' id='Connexion11'  name='Connexion11'></p>";
			  html += optionvalue[2]+":<input type='text' id='Connexion12'  name='Connexion12'></p></br></br>";
		  
	  }
	  if(typeof kriterionvalue[4] !== "undefined"){
		  
		      html += "Connexion between criterion: "+kriterionvalue[4]+" and option(S): </br>"
			  html += optionvalue[0]+":<input type= 'text' id='Connexion13'  name='Connexion13'></p>";
			  html += optionvalue[1]+":<input type='text' id='Connexion14'  name='Connexion14'></p>";
			  html += optionvalue[2]+":<input type='text' id='Connexion15'  name='Connexion15'></p></br></br>";		
		  
		  
	  }
	  
	};
if (i==2){
		  
				
	  html += "Connexion between criterion: "+kriterionvalue[0]+" and option(S): </br>"
	  html += optionvalue[0]+":<input type= 'text' id='Connexion1'  name='Connexion1'></p>";
	  html += optionvalue[1]+":<input type='text' id='Connexion2'  name='Connexion2'></p></br></br>";
	  if(typeof kriterionvalue[1] !== "undefined"){
		  
		      html += "Connexion between criterion: "+kriterionvalue[1]+" and option(S): </br>"
			  html += optionvalue[0]+":<input type= 'text' id='Connexion3'  name='Connexion3'></p>";
			  html += optionvalue[1]+":<input type='text' id='Connexion4'  name='Connexion4'></p></br></br>";		  
	  }
	  if(typeof kriterionvalue[2] !== "undefined"){
		  
		      html += "Connexion between criterion: "+kriterionvalue[2]+" and option(S): </br>"
			  html += optionvalue[0]+":<input type= 'text' id='Connexion5'  name='Connexion5'></p>";
			  html += optionvalue[1]+":<input type='text' id='Connexion6'  name='Connexion6'></p></br></br>";
		  
	  }
	  if(typeof kriterionvalue[3] !== "undefined"){
		  
		      html += "Connexion between criterion: "+kriterionvalue[3]+" and option(S): </br>"
			  html += optionvalue[0]+":<input type= 'text' id='Connexion7'  name='Connexion7'></p>";
			  html += optionvalue[1]+":<input type='text' id='Connexion8'  name='Connexion8'></p></br></br>";
		  
	  }
	  if(typeof kriterionvalue[4] !== "undefined"){
		  
		      html += "Connexion between criterion: "+kriterionvalue[4]+" and option(S): </br>"
			  html += optionvalue[0]+":<input type= 'text' id='Connexion9'  name='Connexion9'></p>";
			  html += optionvalue[1]+":<input type='text' id='Connexion10'  name='Connexion10'></p></br></br>";		
		  
		  
	  }
	  
	};
	if (i==1){
		  
				
	  html += "Connexion between criterion: "+kriterionvalue[0]+" and option(S): </br>"
	  html += optionvalue[0]+":<input type= 'text' id='Connexion1'  name='Connexion1'></p></br></br>";
	  if(typeof kriterionvalue[1] !== "undefined"){
		  
		      html += "Connexion between criterion: "+kriterionvalue[1]+" and option(S): </br>"
			  html += optionvalue[0]+":<input type= 'text' id='Connexion2'  name='Connexion2'></p></br></br>";		  
	  }
	  if(typeof kriterionvalue[2] !== "undefined"){
		  
		      html += "Connexion between criterion: "+kriterionvalue[2]+" and option(S): </br>"
			  html += optionvalue[0]+":<input type= 'text' id='Connexion3'  name='Connexion3'></p></br></br>";
		  
	  }
	  if(typeof kriterionvalue[3] !== "undefined"){
		  
		      html += "Connexion between criterion: "+kriterionvalue[3]+" and option(S): </br>"
			  html += optionvalue[0]+":<input type= 'text' id='Connexion4'  name='Connexion4'></p></br></br>";
		  
	  }
	  if(typeof kriterionvalue[4] !== "undefined"){
		  
		      html += "Connexion between criterion: "+kriterionvalue[4]+" and option(S): </br>"
			  html += optionvalue[0]+":<input type= 'text' id='Connexion5'  name='Connexion5'></p></br></br>";	
		  
		  
	  }
	  
	};
	html += "<input type='submit' value='submit'>";
	html += "<INPUT type='reset'  value='reset'>";
	html += "</form>";
    html += "</body>";
  
  res.send(html);
});


app.post('/thank', urlencodedParser, function (req, res){
	
		
		var i = optionvalue.length;	
		var j = kriterionvalue.length;
		console.log("Voici la taille du vecteur d option est "+i);
		console.log("Voici la valeur de elle meme "+optionvalue[0]);
		console.log("Voici la taille du vecteur de critere "+j);
		console.log("Voici la valeur du critere est: "+kriterionvalue[0]);
    var i = optionvalue.length;
    let paramsb = [];  
		 
	if (i==4 && typeof kriterionvalue[1] == "undefined" && typeof kriterionvalue[2] == "undefined" && typeof kriterionvalue[3] == "undefined" && typeof kriterionvalue[4] == "undefined"){
		
	 
	  let Connexion_Option_1 = req.body.Connexion1;
	  let Connexion_Option_2 = req.body.Connexion2;
	  let Connexion_Option_3 = req.body.Connexion3;
	  let Connexion_Option_4 = req.body.Connexion4;
	  
	   paramsb = {
				"version":1,
				"sender":"string",
				  data: [
				 
				  {key: 'connexion_option1_creterion1', type: 'integer', value: parseInt(Connexion_Option_1, 10) }, //https://ebceu4.github.io/waves-transactions/globals.html#data
				  
				  {key: 'connexion_option2_creterion1', type: 'integer', value: parseInt(Connexion_Option_2, 10) },
				  {key: 'connexion_option3_creterion1', type: 'integer', value: parseInt(Connexion_Option_3, 10) },				  
				  {key: 'connexion_option4_creterion1', type: 'integer', value: parseInt(Connexion_Option_4, 10) }
				  
				 ],
			  
				  fee: 1000000 ,
					timestamp: Date.now()
				
				};
	};
	  
	  
	  if( i==4 && typeof kriterionvalue[1] !== "undefined" && typeof kriterionvalue[2] == "undefined" && typeof kriterionvalue[3] == "undefined" && typeof kriterionvalue[4] == "undefined"){
		  
	  let Connexion_Option_1 = req.body.Connexion1;
	  let Connexion_Option_2 = req.body.Connexion2;
	  let Connexion_Option_3 = req.body.Connexion3;
	  let Connexion_Option_4 = req.body.Connexion4;
	  let Connexion_Option_11 = req.body.Connexion5;
	  let Connexion_Option_21 = req.body.Connexion6;
	  let Connexion_Option_31 = req.body.Connexion7;
	  let Connexion_Option_41 = req.body.Connexion8;
	  
	   paramsb = {
				"version":1,
				"sender":"string",
				  data: [
				 
				  {key: 'connexion_option1_creterion1', type: 'integer', value: parseInt(Connexion_Option_1, 10) }, //https://ebceu4.github.io/waves-transactions/globals.html#data
				  {key: 'connexion_option1_creterion2', type: 'integer', value: parseInt(Connexion_Option_11, 10) },
				  {key: 'connexion_option2_creterion1', type: 'integer', value: parseInt(Connexion_Option_2, 10) },
				  {key: 'connexion_option2_creterion2', type: 'integer', value: parseInt(Connexion_Option_21, 10) },
				  {key: 'connexion_option3_creterion1', type: 'integer', value: parseInt(Connexion_Option_3, 10) },	
				  {key: 'connexion_option3_creterion2', type: 'integer', value: parseInt(Connexion_Option_31, 10) },				  
				  {key: 'connexion_option4_creterion1', type: 'integer', value: parseInt(Connexion_Option_4, 10) },
				  {key: 'connexion_option4_creterion2', type: 'integer', value: parseInt(Connexion_Option_41, 10) }
				  
				 ],
			  
				  fee: 1000000 ,
					timestamp: Date.now()
				
				};
	  
	  
		  
	 };
	 
	 
	 
	  if( i==4 && typeof kriterionvalue[1] !== "undefined" && typeof kriterionvalue[2] !== "undefined" && typeof kriterionvalue[3] == "undefined" && typeof kriterionvalue[4] == "undefined"){
				
			  let Connexion_Option_1 = req.body.Connexion1;
			  let Connexion_Option_2 = req.body.Connexion2;
			  let Connexion_Option_3 = req.body.Connexion3;
			  let Connexion_Option_4 = req.body.Connexion4;
			  let Connexion_Option_11 = req.body.Connexion5;
			  let Connexion_Option_21 = req.body.Connexion6;
			  let Connexion_Option_31 = req.body.Connexion7;
			  let Connexion_Option_41 = req.body.Connexion8;
		      let Connexion_Option_12 = req.body.Connexion9;
			  let Connexion_Option_22 = req.body.Connexion10;
			  let Connexion_Option_32 = req.body.Connexion11;
			  let Connexion_Option_42 = req.body.Connexion12;
			  
			  paramsb = {
				"version":1,
				"sender":"string",
				  data: [
				 
				  {key: 'connexion_option1_creterion1', type: 'integer', value: parseInt(Connexion_Option_1, 10) }, //https://ebceu4.github.io/waves-transactions/globals.html#data
				  {key: 'connexion_option1_creterion2', type: 'integer', value: parseInt(Connexion_Option_11, 10) },
				  {key: 'connexion_option1_creterion3', type: 'integer', value: parseInt(Connexion_Option_12, 10) },
				  {key: 'connexion_option2_creterion1', type: 'integer', value: parseInt(Connexion_Option_2, 10) },
				  {key: 'connexion_option2_creterion2', type: 'integer', value: parseInt(Connexion_Option_21, 10) },
				  {key: 'connexion_option2_creterion3', type: 'integer', value: parseInt(Connexion_Option_22, 10) },
				  {key: 'connexion_option3_creterion1', type: 'integer', value: parseInt(Connexion_Option_3, 10) },	
				  {key: 'connexion_option3_creterion2', type: 'integer', value: parseInt(Connexion_Option_31, 10) },
				  {key: 'connexion_option3_creterion3', type: 'integer', value: parseInt(Connexion_Option_32, 10) },				  
				  {key: 'connexion_option4_creterion1', type: 'integer', value: parseInt(Connexion_Option_4, 10) },
				  {key: 'connexion_option4_creterion2', type: 'integer', value: parseInt(Connexion_Option_41, 10) },
				  {key: 'connexion_option4_creterion3', type: 'integer', value: parseInt(Connexion_Option_42, 10) }
				  
				 ],
			  
				  fee: 1000000 ,
					timestamp: Date.now()
				
				}; 
		   
	  };
	  
	  
	  
	  
	  if(i==4 && typeof kriterionvalue[1] !== "undefined" && typeof kriterionvalue[2] !== "undefined" && typeof kriterionvalue[3] !== "undefined" && typeof kriterionvalue[4] == "undefined"){
		  
			  let Connexion_Option_1 = req.body.Connexion1;
			  let Connexion_Option_2 = req.body.Connexion2;
			  let Connexion_Option_3 = req.body.Connexion3;
			  let Connexion_Option_4 = req.body.Connexion4;
			  let Connexion_Option_11 = req.body.Connexion5;
			  let Connexion_Option_21 = req.body.Connexion6;
			  let Connexion_Option_31 = req.body.Connexion7;
			  let Connexion_Option_41 = req.body.Connexion8;
		      let Connexion_Option_12 = req.body.Connexion9;
			  let Connexion_Option_22 = req.body.Connexion10;
			  let Connexion_Option_32 = req.body.Connexion11;
			  let Connexion_Option_42 = req.body.Connexion12;
		  
		      let Connexion_Option_13 = req.body.Connexion13;
			  let Connexion_Option_23 = req.body.Connexion14;
			  let Connexion_Option_33 = req.body.Connexion15;
			  let Connexion_Option_43 = req.body.Connexion16;
			  
			   paramsb = {
				"version":1,
				"sender":"string",
				  data: [
				 
				  {key: 'connexion_option1_creterion1', type: 'integer', value: parseInt(Connexion_Option_1, 10) }, //https://ebceu4.github.io/waves-transactions/globals.html#data
				  {key: 'connexion_option1_creterion2', type: 'integer', value: parseInt(Connexion_Option_11, 10) },
				  {key: 'connexion_option1_creterion3', type: 'integer', value: parseInt(Connexion_Option_12, 10) },
				  {key: 'connexion_option1_creterion4', type: 'integer', value: parseInt(Connexion_Option_13, 10) },
				  {key: 'connexion_option2_creterion1', type: 'integer', value: parseInt(Connexion_Option_2, 10) },
				  {key: 'connexion_option2_creterion2', type: 'integer', value: parseInt(Connexion_Option_21, 10) },
				  {key: 'connexion_option2_creterion3', type: 'integer', value: parseInt(Connexion_Option_22, 10) },
				  {key: 'connexion_option2_creterion4', type: 'integer', value: parseInt(Connexion_Option_23, 10) },
				  {key: 'connexion_option3_creterion1', type: 'integer', value: parseInt(Connexion_Option_3, 10) },	
				  {key: 'connexion_option3_creterion2', type: 'integer', value: parseInt(Connexion_Option_31, 10) },
				  {key: 'connexion_option3_creterion3', type: 'integer', value: parseInt(Connexion_Option_32, 10) },
				  {key: 'connexion_option3_creterion4', type: 'integer', value: parseInt(Connexion_Option_33, 10) },				  
				  {key: 'connexion_option4_creterion1', type: 'integer', value: parseInt(Connexion_Option_4, 10) },
				  {key: 'connexion_option4_creterion2', type: 'integer', value: parseInt(Connexion_Option_41, 10) },
				  {key: 'connexion_option4_creterion3', type: 'integer', value: parseInt(Connexion_Option_42, 10) },
				  {key: 'connexion_option4_creterion4', type: 'integer', value: parseInt(Connexion_Option_43, 10) }
				  
				 ],
			  
				  fee: 1000000 ,
					timestamp: Date.now()
				
				}; 
			  
			  
		  
	  };
	  
	  
	  
	  if(i==4 && typeof kriterionvalue[1] !== "undefined" && typeof kriterionvalue[2] !== "undefined" && typeof kriterionvalue[3] !== "undefined" && typeof kriterionvalue[4] !== "undefined"){
		  
		  
			  let Connexion_Option_1 = req.body.Connexion1;
			  let Connexion_Option_2 = req.body.Connexion2;
			  let Connexion_Option_3 = req.body.Connexion3;
			  let Connexion_Option_4 = req.body.Connexion4;
			  let Connexion_Option_11 = req.body.Connexion5;
			  let Connexion_Option_21 = req.body.Connexion6;
			  let Connexion_Option_31 = req.body.Connexion7;
			  let Connexion_Option_41 = req.body.Connexion8;
		      let Connexion_Option_12 = req.body.Connexion9;
			  let Connexion_Option_22 = req.body.Connexion10;
			  let Connexion_Option_32 = req.body.Connexion11;
			  let Connexion_Option_42 = req.body.Connexion12;
		  
		      let Connexion_Option_13 = req.body.Connexion13;
			  let Connexion_Option_23 = req.body.Connexion14;
			  let Connexion_Option_33 = req.body.Connexion15;
			  let Connexion_Option_43 = req.body.Connexion16;
			  let Connexion_Option_14 = req.body.Connexion17;
			  let Connexion_Option_24 = req.body.Connexion18;
			  let Connexion_Option_34 = req.body.Connexion19;
			  let Connexion_Option_44 = req.body.Connexion20;
			  
			   paramsb = {
				"version":1,
				"sender":"string",
				  data: [
				 
				  {key: 'connexion_option1_creterion1', type: 'integer', value: parseInt(Connexion_Option_1, 10) }, //https://ebceu4.github.io/waves-transactions/globals.html#data
				  {key: 'connexion_option1_creterion2', type: 'integer', value: parseInt(Connexion_Option_11, 10) },
				  {key: 'connexion_option1_creterion3', type: 'integer', value: parseInt(Connexion_Option_12, 10) },
				  {key: 'connexion_option1_creterion4', type: 'integer', value: parseInt(Connexion_Option_13, 10) },
				  {key: 'connexion_option1_creterion5', type: 'integer', value: parseInt(Connexion_Option_14, 10) },
				  {key: 'connexion_option2_creterion1', type: 'integer', value: parseInt(Connexion_Option_2, 10) },
				  {key: 'connexion_option2_creterion2', type: 'integer', value: parseInt(Connexion_Option_21, 10) },
				  {key: 'connexion_option2_creterion3', type: 'integer', value: parseInt(Connexion_Option_22, 10) },
				  {key: 'connexion_option2_creterion4', type: 'integer', value: parseInt(Connexion_Option_23, 10) },
				  {key: 'connexion_option2_creterion5', type: 'integer', value: parseInt(Connexion_Option_24, 10) },
				  {key: 'connexion_option3_creterion1', type: 'integer', value: parseInt(Connexion_Option_3, 10) },	
				  {key: 'connexion_option3_creterion2', type: 'integer', value: parseInt(Connexion_Option_31, 10) },
				  {key: 'connexion_option3_creterion3', type: 'integer', value: parseInt(Connexion_Option_32, 10) },
				  {key: 'connexion_option3_creterion4', type: 'integer', value: parseInt(Connexion_Option_33, 10) },
				  {key: 'connexion_option3_creterion5', type: 'integer', value: parseInt(Connexion_Option_34, 10) },				  
				  {key: 'connexion_option4_creterion1', type: 'integer', value: parseInt(Connexion_Option_4, 10) },
				  {key: 'connexion_option4_creterion2', type: 'integer', value: parseInt(Connexion_Option_41, 10) },
				  {key: 'connexion_option4_creterion3', type: 'integer', value: parseInt(Connexion_Option_42, 10) },
				  {key: 'connexion_option4_creterion4', type: 'integer', value: parseInt(Connexion_Option_43, 10) },
				  {key: 'connexion_option4_creterion5', type: 'integer', value: parseInt(Connexion_Option_44, 10) }
				  
				 ],
			  
				  fee: 1000000 ,
					timestamp: Date.now()
				
				};  
			  
		  
		};
		
		

if (i==3 && typeof kriterionvalue[1] == "undefined" && typeof kriterionvalue[2] == "undefined" && typeof kriterionvalue[3] == "undefined" && typeof kriterionvalue[4] == "undefined"){
		
	 
	  let Connexion_Option_1 = req.body.Connexion1;
	  let Connexion_Option_2 = req.body.Connexion2;
	  let Connexion_Option_3 = req.body.Connexion3;
	 
	  
	   paramsb = {
				"version":1,
				"sender":"string",
				  data: [
				 
				  {key: 'connexion_option1_creterion1', type: 'integer', value: parseInt(Connexion_Option_1, 10) }, //https://ebceu4.github.io/waves-transactions/globals.html#data
				  
				  {key: 'connexion_option2_creterion1', type: 'integer', value: parseInt(Connexion_Option_2, 10) },
				  {key: 'connexion_option3_creterion1', type: 'integer', value: parseInt(Connexion_Option_3, 10) }				  
				  
				  
				 ],
			  
				  fee: 1000000 ,
					timestamp: Date.now()
				
				};
	};
	  
	  
	  if( i==3 && typeof kriterionvalue[1] !== "undefined" && typeof kriterionvalue[2] == "undefined" && typeof kriterionvalue[3] == "undefined" && typeof kriterionvalue[4] == "undefined"){
		  
	  let Connexion_Option_1 = req.body.Connexion1;
	  let Connexion_Option_2 = req.body.Connexion2;
	  let Connexion_Option_3 = req.body.Connexion3;
	 
	  let Connexion_Option_11 = req.body.Connexion4;
	  let Connexion_Option_21 = req.body.Connexion5;
	  let Connexion_Option_31 = req.body.Connexion6;

	  
	   paramsb = {
				"version":1,
				"sender":"string",
				  data: [
				 
				  {key: 'connexion_option1_creterion1', type: 'integer', value: parseInt(Connexion_Option_1, 10) }, //https://ebceu4.github.io/waves-transactions/globals.html#data
				  {key: 'connexion_option1_creterion2', type: 'integer', value: parseInt(Connexion_Option_11, 10) },
				  {key: 'connexion_option2_creterion1', type: 'integer', value: parseInt(Connexion_Option_2, 10) },
				  {key: 'connexion_option2_creterion2', type: 'integer', value: parseInt(Connexion_Option_21, 10) },
				  {key: 'connexion_option3_creterion1', type: 'integer', value: parseInt(Connexion_Option_3, 10) },	
				  {key: 'connexion_option3_creterion2', type: 'integer', value: parseInt(Connexion_Option_31, 10) }
				  
				 ],
			  
				  fee: 1000000 ,
					timestamp: Date.now()
				
				};
	  
	  
		  
	 };
	 
	 
	 
	  if( i==3 && typeof kriterionvalue[1] !== "undefined" && typeof kriterionvalue[2] !== "undefined" && typeof kriterionvalue[3] == "undefined" && typeof kriterionvalue[4] == "undefined"){
				
			  let Connexion_Option_1 = req.body.Connexion1;
			  let Connexion_Option_2 = req.body.Connexion2;
			  let Connexion_Option_3 = req.body.Connexion3;
			  
			  let Connexion_Option_11 = req.body.Connexion4;
			  let Connexion_Option_21 = req.body.Connexion5;
			  let Connexion_Option_31 = req.body.Connexion6;
			  
		      let Connexion_Option_12 = req.body.Connexion7;
			  let Connexion_Option_22 = req.body.Connexion8;
			  let Connexion_Option_32 = req.body.Connexion9;
			 
			  
			  paramsb = {
				"version":1,
				"sender":"string",
				  data: [
				 
				  {key: 'connexion_option1_creterion1', type: 'integer', value: parseInt(Connexion_Option_1, 10) }, //https://ebceu4.github.io/waves-transactions/globals.html#data
				  {key: 'connexion_option1_creterion2', type: 'integer', value: parseInt(Connexion_Option_11, 10) },
				  {key: 'connexion_option1_creterion3', type: 'integer', value: parseInt(Connexion_Option_12, 10) },
				  {key: 'connexion_option2_creterion1', type: 'integer', value: parseInt(Connexion_Option_2, 10) },
				  {key: 'connexion_option2_creterion2', type: 'integer', value: parseInt(Connexion_Option_21, 10) },
				  {key: 'connexion_option2_creterion3', type: 'integer', value: parseInt(Connexion_Option_22, 10) },
				  {key: 'connexion_option3_creterion1', type: 'integer', value: parseInt(Connexion_Option_3, 10) },	
				  {key: 'connexion_option3_creterion2', type: 'integer', value: parseInt(Connexion_Option_31, 10) },
				  {key: 'connexion_option3_creterion3', type: 'integer', value: parseInt(Connexion_Option_32, 10) }				  
				  
				  
				 ],
			  
				  fee: 1000000 ,
					timestamp: Date.now()
				
				}; 
		   
	  };
	  
	  
	  
	  
	  if(i==3 && typeof kriterionvalue[1] !== "undefined" && typeof kriterionvalue[2] !== "undefined" && typeof kriterionvalue[3] !== "undefined" && typeof kriterionvalue[4] == "undefined"){
		  
			  let Connexion_Option_1 = req.body.Connexion1;
			  let Connexion_Option_2 = req.body.Connexion2;
			  let Connexion_Option_3 = req.body.Connexion3;
			 
			  let Connexion_Option_11 = req.body.Connexion4;
			  let Connexion_Option_21 = req.body.Connexion5;
			  let Connexion_Option_31 = req.body.Connexion6;
			  
		      let Connexion_Option_12 = req.body.Connexion7;
			  let Connexion_Option_22 = req.body.Connexion8;
			  let Connexion_Option_32 = req.body.Connexion9;
			
		  
		      let Connexion_Option_13 = req.body.Connexion10;
			  let Connexion_Option_23 = req.body.Connexion11;
			  let Connexion_Option_33 = req.body.Connexion12;
			 
			  
			   paramsb = {
				"version":1,
				"sender":"string",
				  data: [
				 
				  {key: 'connexion_option1_creterion1', type: 'integer', value: parseInt(Connexion_Option_1, 10) }, //https://ebceu4.github.io/waves-transactions/globals.html#data
				  {key: 'connexion_option1_creterion2', type: 'integer', value: parseInt(Connexion_Option_11, 10) },
				  {key: 'connexion_option1_creterion3', type: 'integer', value: parseInt(Connexion_Option_12, 10) },
				  {key: 'connexion_option1_creterion4', type: 'integer', value: parseInt(Connexion_Option_13, 10) },
				  
				  {key: 'connexion_option2_creterion1', type: 'integer', value: parseInt(Connexion_Option_2, 10) },
				  {key: 'connexion_option2_creterion2', type: 'integer', value: parseInt(Connexion_Option_21, 10) },
				  {key: 'connexion_option2_creterion3', type: 'integer', value: parseInt(Connexion_Option_22, 10) },
				  {key: 'connexion_option2_creterion4', type: 'integer', value: parseInt(Connexion_Option_23, 10) },
				  
				  {key: 'connexion_option3_creterion1', type: 'integer', value: parseInt(Connexion_Option_3, 10) },	
				  {key: 'connexion_option3_creterion2', type: 'integer', value: parseInt(Connexion_Option_31, 10) },
				  {key: 'connexion_option3_creterion3', type: 'integer', value: parseInt(Connexion_Option_32, 10) },
				  {key: 'connexion_option3_creterion4', type: 'integer', value: parseInt(Connexion_Option_33, 10) }
				  				  
				  
				  
				  
				 ],
			  
				  fee: 1000000 ,
					timestamp: Date.now()
				
				}; 
			  
			  
		  
	  };
	  
	  
	  
	  if(i==3 && typeof kriterionvalue[1] !== "undefined" && typeof kriterionvalue[2] !== "undefined" && typeof kriterionvalue[3] !== "undefined" && typeof kriterionvalue[4] !== "undefined"){
		  
		  
			  let Connexion_Option_1 = req.body.Connexion1;
			  let Connexion_Option_2 = req.body.Connexion2;
			  let Connexion_Option_3 = req.body.Connexion3;
			 
			  let Connexion_Option_11 = req.body.Connexion4;
			  let Connexion_Option_21 = req.body.Connexion5;
			  let Connexion_Option_31 = req.body.Connexion6;
			  
		      let Connexion_Option_12 = req.body.Connexion7;
			  let Connexion_Option_22 = req.body.Connexion8;
			  let Connexion_Option_32 = req.body.Connexion9;
			
		  
		      let Connexion_Option_13 = req.body.Connexion10;
			  let Connexion_Option_23 = req.body.Connexion11;
			  let Connexion_Option_33 = req.body.Connexion12;
			  
			  let Connexion_Option_14 = req.body.Connexion13;
			  let Connexion_Option_24 = req.body.Connexion14;
			  let Connexion_Option_34 = req.body.Connexion15;
			
			  
			   paramsb = {
				"version":1,
				"sender":"string",
				  data: [
				 
				  {key: 'connexion_option1_creterion1', type: 'integer', value: parseInt(Connexion_Option_1, 10) }, //https://ebceu4.github.io/waves-transactions/globals.html#data
				  {key: 'connexion_option1_creterion2', type: 'integer', value: parseInt(Connexion_Option_11, 10) },
				  {key: 'connexion_option1_creterion3', type: 'integer', value: parseInt(Connexion_Option_12, 10) },
				  {key: 'connexion_option1_creterion4', type: 'integer', value: parseInt(Connexion_Option_13, 10) },
				  {key: 'connexion_option1_creterion5', type: 'integer', value: parseInt(Connexion_Option_14, 10) },
				  
				  {key: 'connexion_option2_creterion1', type: 'integer', value: parseInt(Connexion_Option_2, 10) },
				  {key: 'connexion_option2_creterion2', type: 'integer', value: parseInt(Connexion_Option_21, 10) },
				  {key: 'connexion_option2_creterion3', type: 'integer', value: parseInt(Connexion_Option_22, 10) },
				  {key: 'connexion_option2_creterion4', type: 'integer', value: parseInt(Connexion_Option_23, 10) },
				  {key: 'connexion_option2_creterion5', type: 'integer', value: parseInt(Connexion_Option_24, 10) },
				  
				  {key: 'connexion_option3_creterion1', type: 'integer', value: parseInt(Connexion_Option_3, 10) },	
				  {key: 'connexion_option3_creterion2', type: 'integer', value: parseInt(Connexion_Option_31, 10) },
				  {key: 'connexion_option3_creterion3', type: 'integer', value: parseInt(Connexion_Option_32, 10) },
				  {key: 'connexion_option3_creterion4', type: 'integer', value: parseInt(Connexion_Option_33, 10) }	,
					{key: 'connexion_option3_creterion5', type: 'integer', value: parseInt(Connexion_Option_34, 10) }	
				  
				  
				 ],
			  
				  fee: 1000000 ,
					timestamp: Date.now()
				
				};  
			  
		  
		};
	
	
if (i==2 && typeof kriterionvalue[1] == "undefined" && typeof kriterionvalue[2] == "undefined" && typeof kriterionvalue[3] == "undefined" && typeof kriterionvalue[4] == "undefined"){
		
	 
	  let Connexion_Option_1 = req.body.Connexion1;
	  let Connexion_Option_2 = req.body.Connexion2;
	  
	 
	  
	   paramsb = {
				"version":1,
				"sender":"string",
				  data: [
				 
				  {key: 'connexion_option1_creterion1', type: 'integer', value: parseInt(Connexion_Option_1, 10) }, //https://ebceu4.github.io/waves-transactions/globals.html#data
				  
				  {key: 'connexion_option2_creterion1', type: 'integer', value: parseInt(Connexion_Option_2, 10) }
				  	  
				  
				  
				 ],
			  
				  fee: 1000000 ,
					timestamp: Date.now()
				
				};
	};
	  
	  
	  if( i==2 && typeof kriterionvalue[1] !== "undefined" && typeof kriterionvalue[2] == "undefined" && typeof kriterionvalue[3] == "undefined" && typeof kriterionvalue[4] == "undefined"){
		  
	  let Connexion_Option_1 = req.body.Connexion1;
	  let Connexion_Option_2 = req.body.Connexion2;
	  
	 
	  let Connexion_Option_11 = req.body.Connexion3;
	  let Connexion_Option_21 = req.body.Connexion4;
	  

	  
	   paramsb = {
				"version":1,
				"sender":"string",
				  data: [
				 
				  {key: 'connexion_option1_creterion1', type: 'integer', value: parseInt(Connexion_Option_1, 10) }, //https://ebceu4.github.io/waves-transactions/globals.html#data
				  {key: 'connexion_option1_creterion2', type: 'integer', value: parseInt(Connexion_Option_11, 10) },
				  {key: 'connexion_option2_creterion1', type: 'integer', value: parseInt(Connexion_Option_2, 10) },
				  {key: 'connexion_option2_creterion2', type: 'integer', value: parseInt(Connexion_Option_21, 10) }
				 
				  
				 ],
			  
				  fee: 1000000 ,
					timestamp: Date.now()
				
				};
	  
	  
		  
	 };
	 
	 
	 
	  if( i==2 && typeof kriterionvalue[1] !== "undefined" && typeof kriterionvalue[2] !== "undefined" && typeof kriterionvalue[3] == "undefined" && typeof kriterionvalue[4] == "undefined"){
				
			  let Connexion_Option_1 = req.body.Connexion1;
			  let Connexion_Option_2 = req.body.Connexion2;
			  
			  
			  let Connexion_Option_11 = req.body.Connexion3;
			  let Connexion_Option_21 = req.body.Connexion4;
			  
			  
		      let Connexion_Option_12 = req.body.Connexion5;
			  let Connexion_Option_22 = req.body.Connexion6;
			  
			 
			  
			  paramsb = {
				"version":1,
				"sender":"string",
				  data: [
				 
				  {key: 'connexion_option1_creterion1', type: 'integer', value: parseInt(Connexion_Option_1, 10) }, //https://ebceu4.github.io/waves-transactions/globals.html#data
				  {key: 'connexion_option1_creterion2', type: 'integer', value: parseInt(Connexion_Option_11, 10) },
				  {key: 'connexion_option1_creterion3', type: 'integer', value: parseInt(Connexion_Option_12, 10) },
				  {key: 'connexion_option2_creterion1', type: 'integer', value: parseInt(Connexion_Option_2, 10) },
				  {key: 'connexion_option2_creterion2', type: 'integer', value: parseInt(Connexion_Option_21, 10) },
				  {key: 'connexion_option2_creterion3', type: 'integer', value: parseInt(Connexion_Option_22, 10) }
				  			  
				  
				  
				 ],
			  
				  fee: 1000000 ,
					timestamp: Date.now()
				
				}; 
		   
	  };
	  
	  
	  
	  
	  if(i==2 && typeof kriterionvalue[1] !== "undefined" && typeof kriterionvalue[2] !== "undefined" && typeof kriterionvalue[3] !== "undefined" && typeof kriterionvalue[4] == "undefined"){
		  
			  let Connexion_Option_1 = req.body.Connexion1;
			  let Connexion_Option_2 = req.body.Connexion2;
			  
			  
			  let Connexion_Option_11 = req.body.Connexion3;
			  let Connexion_Option_21 = req.body.Connexion4;
			  
			  
		      let Connexion_Option_12 = req.body.Connexion5;
			  let Connexion_Option_22 = req.body.Connexion6;
			  
			
		  
		      let Connexion_Option_13 = req.body.Connexion7;
			  let Connexion_Option_23 = req.body.Connexion8;
			  
			 
			  
			   paramsb = {
				"version":1,
				"sender":"string",
				  data: [
				 
				  {key: 'connexion_option1_creterion1', type: 'integer', value: parseInt(Connexion_Option_1, 10) }, //https://ebceu4.github.io/waves-transactions/globals.html#data
				  {key: 'connexion_option1_creterion2', type: 'integer', value: parseInt(Connexion_Option_11, 10) },
				  {key: 'connexion_option1_creterion3', type: 'integer', value: parseInt(Connexion_Option_12, 10) },
				  {key: 'connexion_option1_creterion4', type: 'integer', value: parseInt(Connexion_Option_13, 10) },
				  {key: 'connexion_option2_creterion1', type: 'integer', value: parseInt(Connexion_Option_2, 10) },
				  {key: 'connexion_option2_creterion2', type: 'integer', value: parseInt(Connexion_Option_21, 10) },
				  {key: 'connexion_option2_creterion3', type: 'integer', value: parseInt(Connexion_Option_22, 10) },
				  {key: 'connexion_option2_creterion4', type: 'integer', value: parseInt(Connexion_Option_23, 10) }
				  
				  
				  
				  
				 ],
			  
				  fee: 1000000 ,
					timestamp: Date.now()
				
				}; 
			  
			  
		  
	  };
	  
	  
	  
	  if(i==2 && typeof kriterionvalue[1] !== "undefined" && typeof kriterionvalue[2] !== "undefined" && typeof kriterionvalue[3] !== "undefined" && typeof kriterionvalue[4] !== "undefined"){
		  
		  
			  let Connexion_Option_1 = req.body.Connexion1;
			  let Connexion_Option_2 = req.body.Connexion2;
			  
			  
			  let Connexion_Option_11 = req.body.Connexion3;
			  let Connexion_Option_21 = req.body.Connexion4;
			  
			  
		      let Connexion_Option_12 = req.body.Connexion5;
			  let Connexion_Option_22 = req.body.Connexion6;
			  
			
		  
		      let Connexion_Option_13 = req.body.Connexion7;
			  let Connexion_Option_23 = req.body.Connexion8;
			  
			  
			  let Connexion_Option_14 = req.body.Connexion9;
			  let Connexion_Option_24 = req.body.Connexion10;
			  
			
			  
			   paramsb = {
				"version":1,
				"sender":"string",
				  data: [
				 
				  {key: 'connexion_option1_creterion1', type: 'integer', value: parseInt(Connexion_Option_1, 10) }, //https://ebceu4.github.io/waves-transactions/globals.html#data
				  {key: 'connexion_option1_creterion2', type: 'integer', value: parseInt(Connexion_Option_11, 10) },
				  {key: 'connexion_option1_creterion3', type: 'integer', value: parseInt(Connexion_Option_12, 10) },
				  {key: 'connexion_option1_creterion4', type: 'integer', value: parseInt(Connexion_Option_13, 10) },
				  {key: 'connexion_option1_creterion5', type: 'integer', value: parseInt(Connexion_Option_14, 10) },
				  {key: 'connexion_option2_creterion1', type: 'integer', value: parseInt(Connexion_Option_2, 10) },
				  {key: 'connexion_option2_creterion2', type: 'integer', value: parseInt(Connexion_Option_21, 10) },
				  {key: 'connexion_option2_creterion3', type: 'integer', value: parseInt(Connexion_Option_22, 10) },
				  {key: 'connexion_option2_creterion4', type: 'integer', value: parseInt(Connexion_Option_23, 10) },
				  {key: 'connexion_option2_creterion5', type: 'integer', value: parseInt(Connexion_Option_24, 10) }
				 			  
				  
				  
				 ],
			  
				  fee: 1000000 ,
					timestamp: Date.now()
				
				};  
			  
		  
		};	

	

	if (i==1 && typeof kriterionvalue[1] == "undefined" && typeof kriterionvalue[2] == "undefined" && typeof kriterionvalue[3] == "undefined" && typeof kriterionvalue[4] == "undefined"){
		
	 
	  let Connexion_Option_1 = req.body.Connexion1;
	  	  
	   paramsb = {
				"version":1,
				"sender":"string",
				  data: [
				 
				  {key: 'connexion_option1_creterion1', type: 'integer', value: parseInt(Connexion_Option_1, 10) }, //https://ebceu4.github.io/waves-transactions/globals.html#data
				  			  	  
				  
				  
				 ],
			  
				  fee: 1000000 ,
					timestamp: Date.now()
				
				};
	};
	  
	  
	  if( i==1 && typeof kriterionvalue[1] !== "undefined" && typeof kriterionvalue[2] == "undefined" && typeof kriterionvalue[3] == "undefined" && typeof kriterionvalue[4] == "undefined"){
		  
	  let Connexion_Option_1 = req.body.Connexion1;	  	 
	  let Connexion_Option_11 = req.body.Connexion2;
	  
	  console.log("Voilaaaaaaaaaaaaaaaaaa " +Connexion_Option_1);

	  
	   paramsb = {
				"version":1,
				"sender":"string",
				  data: [
				 
				  {key: 'connexion_option1_creterion1', type: 'integer', value: parseInt(Connexion_Option_1, 10) }, //https://ebceu4.github.io/waves-transactions/globals.html#data
				  {key: 'connexion_option1_creterion2', type: 'integer', value: parseInt(Connexion_Option_11, 10) }
				 
				  
				 ],
			  
				  fee: 1000000 ,
					timestamp: Date.now()
				
				};
	  
	  
		  
	 };
	 
	 
	 
	  if( i==1 && typeof kriterionvalue[1] !== "undefined" && typeof kriterionvalue[2] !== "undefined" && typeof kriterionvalue[3] == "undefined" && typeof kriterionvalue[4] == "undefined"){
				
			  let Connexion_Option_1 = req.body.Connexion1;
			  			  
			  let Connexion_Option_11 = req.body.Connexion2;
			  			  
		      let Connexion_Option_12 = req.body.Connexion3;
			  
			  
			 
			  
			  paramsb = {
				"version":1,
				"sender":"string",
				  data: [
				 
				  {key: 'connexion_option1_creterion1', type: 'integer', value: parseInt(Connexion_Option_1, 10) }, //https://ebceu4.github.io/waves-transactions/globals.html#data
				  {key: 'connexion_option1_creterion2', type: 'integer', value: parseInt(Connexion_Option_11, 10) },
				  {key: 'connexion_option1_creterion3', type: 'integer', value: parseInt(Connexion_Option_12, 10) }
				  
				  
				 ],
			  
				  fee: 1000000 ,
					timestamp: Date.now()
				
				}; 
		   
	  };
	  
	  
	  
	  
	  if(i==1 && typeof kriterionvalue[1] !== "undefined" && typeof kriterionvalue[2] !== "undefined" && typeof kriterionvalue[3] !== "undefined" && typeof kriterionvalue[4] == "undefined"){
		  
			  let Connexion_Option_1 = req.body.Connexion1;
			  			  
			  let Connexion_Option_11 = req.body.Connexion2;
			  			  
		      let Connexion_Option_12 = req.body.Connexion3;
			 
		      let Connexion_Option_13 = req.body.Connexion4;
			  
			  
			   paramsb = {
				"version":1,
				"sender":"string",
				  data: [
				 
				  {key: 'connexion_option1_creterion1', type: 'integer', value: parseInt(Connexion_Option_1, 10) }, //https://ebceu4.github.io/waves-transactions/globals.html#data
				  {key: 'connexion_option1_creterion2', type: 'integer', value: parseInt(Connexion_Option_11, 10) },
				  {key: 'connexion_option1_creterion3', type: 'integer', value: parseInt(Connexion_Option_12, 10) },
				  {key: 'connexion_option1_creterion4', type: 'integer', value: parseInt(Connexion_Option_13, 10) }
				  
				  
				  
				  
				 ],
			  
				  fee: 1000000 ,
					timestamp: Date.now()
				
				}; 
			  
			  
		  
	  };
	  
	  
	  
	  if(i==1 && typeof kriterionvalue[1] !== "undefined" && typeof kriterionvalue[2] !== "undefined" && typeof kriterionvalue[3] !== "undefined" && typeof kriterionvalue[4] !== "undefined"){
		  
		  
			  let Connexion_Option_1 = req.body.Connexion1;
			  			  
			  let Connexion_Option_11 = req.body.Connexion2;
			  			  
		      let Connexion_Option_12 = req.body.Connexion3;
			 
		      let Connexion_Option_13 = req.body.Connexion4;
			  
			  let Connexion_Option_14 = req.body.Connexion5;
			  
			
			  
			   paramsb = {
				"version":1,
				"sender":"string",
				  data: [
				 
				  {key: 'connexion_option1_creterion1', type: 'integer', value: parseInt(Connexion_Option_1, 10) }, //https://ebceu4.github.io/waves-transactions/globals.html#data
				  {key: 'connexion_option1_creterion2', type: 'integer', value: parseInt(Connexion_Option_11, 10) },
				  {key: 'connexion_option1_creterion3', type: 'integer', value: parseInt(Connexion_Option_12, 10) },
				  {key: 'connexion_option1_creterion4', type: 'integer', value: parseInt(Connexion_Option_13, 10) },
				  {key: 'connexion_option1_creterion5', type: 'integer', value: parseInt(Connexion_Option_14, 10) }			 			  
				  
				  
				 ],
			  
				  fee: 1000000 ,
					timestamp: Date.now()
				
				};  
			  
		  
		};
	
		 		     	
	
				
			const signedDataTx12 = data(paramsb, adr1);
			const transferSidnedWithTwoParties = data(signedDataTx12 , seedEnterByUser) ;	 
			var res33 = request('POST', 'https://testnodes.wavesnodes.com/transactions/broadcast', {
			  json:  transferSidnedWithTwoParties,
			});
			var resultat = JSON.parse(res33.getBody('utf8'));
			console.log(resultat); 
			
		 res.redirect('/result2.html');
		 
		
  
  
 });
 
 /*app.post('/resultat2', function (req, res2) {
		setTimeout(wait, 20000);
	
		 res2.redirect('/result');	 

})	*/

app.get('/resultat3', function (req, res2) {
			wait();
        
		getoptionvalue() ;
		printoptions() ;
	
		res2.send(bestoption()); 

})

app.listen(8080, '127.0.0.1', function () {
  console.log('Example app listening on port 8080!');
})

