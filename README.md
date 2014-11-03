Vcl.js takes the Delphi/VB approach into the HTML5 world,providing a full stack for a true web RAD development.Build Node.js&.net web application in no-time.
=====



### TypScript component based framework for enterprise web application.

VCL.JS is a TypeScript framework that does all of the heavy work that you'd normally have to do by hand. 
There are tasks that are common to every enterprise web app; 
VCL.JS does those things for you, so you can focus on building business logic and UI.

These are the features that make VCL.JS a joy to use:
- Visual Component Library- include Page,Grid,Input,Gauges,Charts and many more
- Visual studio integration
- Node.js / IIS backend
- Pure typescript
- Single page application
- Data binding
- Simple database query execution 
- Routing
- Twitter bootstrap 
- AMD - Module loader

###Friendly APIs help you get your job done faster.
```javascript
//Simple dbgrid bounded to a query
import V = require("VCL/VCL");
export class PageHome extends V.TPage {
  constructor() {
  super();

    //create a backend query
    var qur = new V.TQuery(this);
    qur.SQL = "SELECT CustomerKey, FirstName, LastName FROM Customers";
    qur.open();

    //create a grid on the screen
    var grd = new V.TDBGrid(this, "grid");
    grd.Dataset = qur; //bind the grid to the dataset
    grd.PageSize = 15;

    var col = grd.createColumn(“FirstName”);
    var col = grd.createColumn(“Lastname”,”Last Name”);
  }
}
```

###Getting Started
For a getting started please refer to our website.
#### http://www.vcljs.com

You may also load the visual studio plugin in which includes everything you need to get started.

###Building and running the sample application
- Download and install TypeScript.
- Download and instal VCL.JS plugin from this page
- Start visual studio 2012
- Create a new project - File/New project
- Make sure .net 4 and above are selected
- Search for vcl template and select "VCL-SampleProject"
- Press OK
- Right click on defaut.html and select "set as start page"
- Run the project.


### Documentation
#### http://vcljs.com/

### Contribution
[See `CONTRIBUTING.md`](https://github.com/vclteam/VCL.JS/blob/master/CONTRIBUTING.md)

# Introduction video
<a href="http://www.youtube.com/watch?feature=player_embedded&v=Hd_U3XIHh6w
" target="_blank"><img src="http://img.youtube.com/vi/Hd_U3XIHh6w/0.jpg" 
alt="IMAGE ALT TEXT HERE" width="280" height="180" border="10" /></a>
