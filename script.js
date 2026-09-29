let language='nl';
function toggleLanguage(){
  language=language==='nl'?'en':'nl';
  document.documentElement.lang=language;
  document.querySelectorAll('[data-nl]').forEach(el=>{el.textContent=el.dataset[language]});
  document.getElementById('langLabel').textContent=language==='nl'?'EN':'NL';
  document.title=language==='nl'?'Autosleutel Zeewolde | Autosleutel bijmaken & programmeren':'Autosleutel Zeewolde | Car key service';
}
document.getElementById('year').textContent=new Date().getFullYear();
