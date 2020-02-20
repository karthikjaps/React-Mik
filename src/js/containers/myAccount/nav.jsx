import React from "react";
import { Link } from "react-router-dom";
import { fromJS } from "immutable";
import { getUrl } from "../../../../server/helpers/routing";
import withTranslations from "../translations/withTranslations";

class Nav extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      profileMenu: null
    };
  }

  componentDidMount() {
    this.setState({
      profileMenu: fromJS([
        {
          id: 1,
          title: this.props.translations.get("myAccount_title"),
          url: "#",
          isActive: false,
          children: [
            {
              id: 11,
              title: this.props.translations.get("myAccount_myProfile"),
              url: "/edit-profile",
              isActive: false,
              icon: {
                title: "profile.svg",
                imageUrl: "/img/icons/my-account/profile.svg",
                alternateText: "profile.svg",
                width: "",
                height: ""
              }
            },
            {
              id: 12,
              title: this.props.translations.get("myAccount_myAddress"),
              url: "/shipment-address",
              isActive: false,
              icon: {
                title: "address.svg",
                imageUrl: "/img/icons/my-account/address.svg",
                alternateText: "address.svg",
                width: "",
                height: ""
              }
            },
            {
              id: 13,
              title: this.props.translations.get("myAccount_myOrders"),
              url: "/order-history",
              isActive: false,
              icon: {
                title: "orders.svg",
                imageUrl: "/img/icons/my-account/orders.svg",
                alternateText: "orders.svg",
                width: "",
                height: ""
              }
            },
            {
              id: 14,
              title: this.props.translations.get("myAccount_myWishlist"),
              url: "/wishlist",
              isActive: false,
              icon: {
                title: "wishlist.svg",
                imageUrl: "/img/icons/my-account/wishlist.svg",
                alternateText: "wishlist.svg",
                width: "",
                height: ""
              }
            },
            {
              id: 15,
              title: this.props.translations.get("myAccount_signOut"),
              url: "/logout",
              isActive: false,
              icon: {
                title: "sign-out.svg",
                imageUrl: "/img/icons/my-account/sign-out.svg",
                alternateText: "sign-out.svg",
                width: "",
                height: ""
              }
            }
          ]
        }
      ])
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.translations !== this.props.translations) {
      this.setState({
        profileMenu: fromJS([
          {
            id: 1,
            title: this.props.translations.get("myAccount_title"),
            url: "#",
            isActive: false,
            children: [
              {
                id: 11,
                title: this.props.translations.get("myAccount_myProfile"),
                url: "/edit-profile",
                isActive: false,
                icon: {
                  title: "profile.svg",
                  imageUrl: "/img/icons/my-account/profile.svg",
                  alternateText: "profile.svg",
                  width: "",
                  height: ""
                }
              },
              {
                id: 12,
                title: this.props.translations.get("myAccount_myAddress"),
                url: "/shipment-address",
                isActive: false,
                icon: {
                  title: "address.svg",
                  imageUrl: "/img/icons/my-account/address.svg",
                  alternateText: "address.svg",
                  width: "",
                  height: ""
                }
              },
              {
                id: 13,
                title: this.props.translations.get("myAccount_myOrders"),
                url: "/order-history",
                isActive: false,
                icon: {
                  title: "orders.svg",
                  imageUrl: "/img/icons/my-account/orders.svg",
                  alternateText: "orders.svg",
                  width: "",
                  height: ""
                }
              },
              {
                id: 14,
                title: this.props.translations.get("myAccount_myWishlist"),
                url: "/wishlist",
                isActive: false,
                icon: {
                  title: "wishlist.svg",
                  imageUrl: "/img/icons/my-account/wishlist.svg",
                  alternateText: "wishlist.svg",
                  width: "",
                  height: ""
                }
              },
              {
                id: 15,
                title: this.props.translations.get("myAccount_signOut"),
                url: "/logout",
                isActive: false,
                icon: {
                  title: "sign-out.svg",
                  imageUrl: "/img/icons/my-account/sign-out.svg",
                  alternateText: "sign-out.svg",
                  width: "",
                  height: ""
                }
              }
            ]
          }
        ])
      });
    }
  }

  render() {
    const options =
      this.state.profileMenu && this.state.profileMenu.first().get("children");
    return (
      <nav className="my-account__nav">
        <ul className="my-account__nav__list">
          {options &&
            options.map(n => (
              <li
                key={n.get("id")}
                className={`my-account__nav__item ${this.props.url ===
                  n.get("url") && "my-account__nav__item--active"}`}
              >
                <img
                  src={n.getIn(["icon", "imageUrl"])}
                  alt={n.getIn(["icon", "alternateText"])}
                  title={n.getIn(["icon", "title"])}
                  className="my-account__nav__item__icon"
                />
                <Link
                  to={getUrl(n.get("url"))}
                  title={n.get("title")}
                  className={`my-account__nav__item__link ${this.props.url ===
                    n.get("url") && "my-account__nav__item__link--active"}`}
                >
                  {n.get("title")}
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    );
  }
}

export default withTranslations(Nav, [
  "myAccount_title",
  "myAccount_myProfile",
  "myAccount_myAddress",
  "myAccount_myOrders",
  "myAccount_myWishlist",
  "myAccount_signOut",
  "search_placeholder"
]);
