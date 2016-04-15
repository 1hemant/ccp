/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function getVisualisationData(id) {
$.ajax({
    url: "http://10.90.21.43:8888/visualization-service/getVisualizationData?workboard_id=".concat(id),                
    type: "POST",
    beforeSend: function(xhr){xhr.setRequestHeader('AccessToken',localStorage.getItem("accessToken"));},
    success: function(object)
    { 

       visualData=object;
    }
 });
  return visualData;
}