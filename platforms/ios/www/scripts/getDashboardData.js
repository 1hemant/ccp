/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function getDashboardData() {
    var dashboardData
    var requestData ={"data":{"userId":6}};
    $.ajax({
        url: "http://10.90.21.43:8081/repository-service/getRepository",
        type: "POST",
        data: JSON.stringify(requestData),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        beforeSend: function(xhr){xhr.setRequestHeader('AccessToken',localStorage.getItem("accessToken"));},
        success: function(object)
        { 
           dashboardData=object;     
        }
    });
  return dashboardData;
}
 