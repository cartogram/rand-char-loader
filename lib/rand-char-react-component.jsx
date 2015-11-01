import React, {PropTypes, Component} from 'react/addons';
import './rand-char-react-component.scss';

export default class RandCharReactComponent extends React.Component {
    static propTypes = {
        characters: PropTypes.array
    }
    static defaultProps = {
        characters: ['&#9786;', '&#9786;', '&#9787;', '&#9785;', '&#9788;', '&#9730;', '&#9731;', '&#9883;', '&#9990;', '&#63743;', '&#8984;', '&#8679;', '&#10017;', '&#9773;', '&#9756;', '&#9758;', '&#9757;', '&#9759;', '&#9996;', '&#10004;', '&#9733;', '&#9850;', '&#9992;', '&hearts;', '&#9834;', '&#9835;', '&#9836;', '&#9792;', '&#9794;', '&#9890;', '&#9891;', '&#10006;', '&infin;', '&yen;', '&euro;', '&#36;', '&cent;', '&pound;', '&copy;', '&reg;', '&#64;'],
    };
    constructor(props) {
        super(props);
        this.state = { 
            loop: null,
            loading: props.loading,
            character: '' 
        };
    }
    randomCharacter() {
        return this.props.characters[Math.floor(Math.random() * this.props.characters.length)];
    };
    componentWillUpdate() {
        var self = this;

        if(self.state.loading === true) {

            document.documentElement.setAttribute('data-loading', '');

            if ( self.state.loop == null ) {
                self.state.loop = setInterval(function() {
                    self.setState({
                        character : self.randomCharacter()
                    })
                }, 50);
            }
        } else {
            document.documentElement.setAttribute('data-loading', false);
            clearInterval(self.state.loop);
            self.setState({loop: null});
        }
    }

    render() {
        return <div dangerouslySetInnerHTML={{__html: this.state.character}} className="rand-char-react-component"></div>;
    }
};
