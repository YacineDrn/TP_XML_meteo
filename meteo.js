      function showCity()
      {
        //1 valeur qui reçoit la ville choisie
        let selectedCity = document.getElementById("citySelect").value;
        //2 création de la liste des villes
        let cities = document.getElementsByClassName("divVille");
        //3 
        for (let i = 0; i < 3; i++) {
    if (cities[i].id == selectedCity||selectedCity=="All") {
      // garder l'element visible -> 
      
      document.getElementById(cities[i].id).style.display = "flex";}
    else {
      console.log("ko")
      // cacher l'element -> 
      document.getElementById(cities[i].id).style.display = "none"; }
  }

}
