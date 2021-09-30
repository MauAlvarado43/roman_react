import React from "react";
import ListRomans from "../components/Roman/ListRomans"
import FormRoman from "../components/Roman/FormRoman";
import { BrowserRouter, Link } from "react-router-dom";
import { ModalRoute } from "seed/helpers";
import CharactersRoman from "components/Roman/CharactersRoman";

const Roman = () =>
<BrowserRouter basename="/romans">
<div class="content container-fluid">

{/* Header */}
<div class="page-header">
  <div class="row align-items-end">

    <br/><br/><br/>

    <div class="col-sm">
      <h1 class="page-header-title">Procesos</h1>
    </div>

    <div class="col-sm-auto">
      <div class="btn-group" role="group">
        <Link to="/new" className="btn btn-primary">
          <i class="tio-add mr-1"></i>Ejecutar proceso
        </Link>
      </div>
    </div>

  </div>
</div>

{/* List */}
<ListRomans />

{/* Modals */}
<ModalRoute
    path="/new"
    component={FormRoman} />

<ModalRoute
    path="/:processId(\d+)/characters"
    component={CharactersRoman} />

</div>
</BrowserRouter>;

Roman.propTypes = {};

export default Roman;