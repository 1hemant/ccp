/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function getWorkboardData(userId,workboard_id) {
var requestData = {"data":{"userId":userId,"workboard-id":workboard_id}};
$.ajax({
     url: "http://10.90.21.43:8081/workboard-service/get-workboard",               
     type: "POST",
     data: JSON.stringify(requestData),
     contentType: 'application/json; charset=utf-8',
     dataType: 'json',
     //beforeSend: function(xhr){xhr.setRequestHeader('AccessToken',localStorage.getItem("accessToken"));},
     success: function(object)
     { 
               workboardData=object;     
     }
  });
  return workboardData;
}
