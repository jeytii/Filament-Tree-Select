function setup(i,t,r,h){return{state:i,options:t,searchItems:r,labelAttribute:h,searchQuery:"",showOptions:!1,toggle(e){this.state.some(s=>s.id===e.id)?this.state=this.state.filter(s=>s.id!==e.id):this.state.push({...e,[h]:e[h].replace(/<(\/)?b>/g,"")})},searchResults(){const e=new RegExp(this.searchQuery,"i");return this.searchItems.filter(s=>e.test(s[h])).map(s=>({...s,[h]:s[h].replace(e,"<b>$&</b>")}))},clickOutsideClose(){this.showOptions=!1,this.searchQuery=""}}}
