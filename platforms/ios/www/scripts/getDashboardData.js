/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function getDashboardData() {
    var dashboardData
    $.ajax({
        url: "http://10.90.21.43:8888/repository-service/getRepository",                
        type: "POST",
        beforeSend: function(xhr){xhr.setRequestHeader('AccessToken',localStorage.getItem("accessToken"));},
        success: function(object)
        { 
           dashboardData=object;     
        }
    });
  return dashboardData;
}
 