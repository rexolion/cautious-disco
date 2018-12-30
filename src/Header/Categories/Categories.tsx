import * as React from 'react';
import './Categories.css';

export interface CategoriesProps {

}

export interface CategoriesState {
  showMenu: boolean;
}

class Categories extends React.Component<CategoriesProps, CategoriesState> {
  constructor(props: CategoriesProps) {
    super(props);
    this.state = { showMenu: false  };
  }

  handleClickOutside() {
    this.state = { showMenu: false };
  }

  toogleList() {
    this.setState(prevState => ({
      showMenu: !prevState.showMenu,
    }));

  }

  public render() {
    const showMenu = this.state.showMenu;
    return (
            <div className="Categories-container" onClick={() => this.toogleList()}>
            Все категории
                {showMenu && <ul className="Categories-content">
                <li>Напитки</li>
                <li>Крупы</li>
                <li>Овощи</li>
                <li>Орехи</li>
                </ul>}
            </div>
    );
  }
}

export default Categories;
