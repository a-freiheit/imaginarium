var myform = $("form#myform");
myform.submit(function(event){
	event.preventDefault();

  // Change to your service ID, or keep using the default service
  var service_id = "default_service";
  var template_id = "template_XZfJd4tu";

  myform.find("button").text("��������...");
  emailjs.sendForm(service_id,template_id,"myform")
  	.then(function(){ 
    	alert("����������!");
       myform.find("button").text("���������");
    }, function(err) {
       alert("��������� �� ����������!\r\n Response:\n " + JSON.stringify(err));
       myform.find("button").text("���������");
    });
  return false;
});