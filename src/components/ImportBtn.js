import React from 'react';

export default class ImportBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isActive: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.isActive) {
      this.toggleBtnState();
    }
  }

  toggleBtnState() {
    this.setState((state) => ({ isActive: !state.isActive }));
  }

  render() {
    return (
      <button
        id="import-btn"
        onClick={this.handleClick}
        className={this.state.isActive ? 'active' : 'loading'}
      >
        {this.state.isActive
          ? 'Importer une Commande'
          : 'Importation en cours...'}
      </button>
    );
  }
}
