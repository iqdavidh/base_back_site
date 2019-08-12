const LibTexto = {

  Ucfirst: (string) => {
    string=string.toString().toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

};

module.exports = LibTexto;
