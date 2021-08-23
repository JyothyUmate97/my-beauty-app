import './scss/index.scss';
import 'animate.css/animate.css';

import React from 'react';

import {
  Carousel,
  Modal,
  Tab,
  Tabs,
} from 'react-bootstrap';
import Media from 'react-media';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import ReactSVG from 'react-svg';

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import {
  useCart,
  useSignOut,
  useUserDetails,
} from '@sdk/react';

import {
  MenuDropdown,
  Offline,
  Online,
  OverlayContext,
  OverlayTheme,
  OverlayType,
} from '../';
import * as appPaths from '../../app/routes';
import { Button } from '../../components';
import {
  generateProductUrl,
  maybe,
} from '../../core/utils';
import {
  mediumScreen,
  smallScreen,
} from '../../globalStyles/scss/variables.scss';
// import logoImg from "../../images/logo.svg";
import logoImg from '../../images/Beauty_Logo_Small.svg';
import cartImg from '../../images/cart.svg';
import hamburgerHoverImg from '../../images/hamburger-hover.svg';
import hamburgerImg from '../../images/hamburger.svg';
import searchImg from '../../images/search.svg';
import userImg from '../../images/user.svg';
import NavDropdown from './NavDropdown';
import {
  TypedInfluencerQuery,
  TypedMainMenuQuery,
} from './queries';

const MainMenu: React.FC = () => {
  const { data: user } = useUserDetails();
  const [signOut] = useSignOut();
  const { items } = useCart();

  const handleSignOut = () => {
    signOut();
  };

  const [isOpen, setIsOpen] = React.useState(false);
  const showModal = () => {
    setIsOpen(true);
  };
  
  const hideModal = () => {
    setIsOpen(false);
  };
  
  React.useEffect(() => {
    if (window.location.pathname === "/"){
      setIsOpen(true);
    }
  }, []);
  window.onload = (event) => {
    if (document.querySelectorAll('video')[0]){
      document.querySelectorAll('video')[0].muted = true
      document.querySelectorAll('video')[0].play()
    }

  };
  const cartItemsQuantity =
    (items &&
      items.reduce((prevVal, currVal) => prevVal + currVal.quantity, 0)) ||
    0;
    
  return (
    <OverlayContext.Consumer>
      {overlayContext => (
        <nav className="main-menu" id="header">

          <div className="main-menu__center">
            <Link to={appPaths.baseUrl}>
              <ReactSVG path={logoImg} className={'storefront-logo'} />
            </Link>
          </div>

          <div className="main-menu__left">
            <TypedMainMenuQuery renderOnError displayLoader={false}>
              {({ data }) => {
                const items = maybe(() => data.shop.navigation.main.items, []);

                return (
                  <ul>
                    <Media
                      query={{ maxWidth: mediumScreen }}
                      render={() => (
                        <li
                          className="main-menu__hamburger"
                          onClick={() =>
                            overlayContext.show(
                              OverlayType.sideNav,
                              OverlayTheme.left,
                              { data: items }
                            )
                          }
                        >
                          <ReactSVG
                            path={hamburgerImg}
                            className={"main-menu__hamburger--icon"}
                          />
                          <ReactSVG
                            path={hamburgerHoverImg}
                            className={"main-menu__hamburger--hover"}
                          />
                        </li>
                      )}
                    />
                    <Media
                      query={{ minWidth: mediumScreen }}
                      render={() =>
                        items.map(item => (
                          <li
                            data-cy="main-menu__item"
                            className="main-menu__item"
                            key={item.id}
                          >
                            <NavDropdown overlay={overlayContext} {...item} />
                          </li>
                        ))
                      }
                    />
                    <Online>
                      <Media
                        query={{ maxWidth: smallScreen }}
                        render={() => (
                          <>
                            {user ? (
                              <MenuDropdown
                                suffixClass={'__rightdown'}
                                head={
                                  <li className="main-menu__icon main-menu__user--active">
                                    <ReactSVG path={userImg} />
                                  </li>
                                }
                                content={
                                  <ul className="main-menu__dropdown">
                                    <li data-testid="my_account__link">
                                      <Link to={appPaths.accountUrl}>My Account</Link>
                                    </li>
                                    <li data-testid="order_history__link">
                                      <Link to={appPaths.orderHistoryUrl}>
                                        Order history
                                </Link>
                                    </li>
                                    <li data-testid="address_book__link">
                                      <Link to={appPaths.addressBookUrl}>
                                        Address book
                                </Link>
                                    </li>
                                    <li
                                      onClick={handleSignOut}
                                      data-testid="logout-link"
                                    >
                                      Log Out
                              </li>
                                  </ul>
                                }
                              />
                            ) : (
                                <li
                                  data-testid="login-btn"
                                  className="main-menu__icon"
                                  onClick={() =>
                                    overlayContext.show(
                                      OverlayType.login,
                                      OverlayTheme.left
                                    )
                                  }
                                >
                                  <ReactSVG path={userImg} />
                                </li>
                              )}
                          </>
                        )}
                      />
                    </Online>
                  </ul>
                );
              }}
            </TypedMainMenuQuery>
          </div>


          <div className="main-menu__right">
            <ul>
              <li className="mr-15" >
                {/* Influencer Modal */}
                <TypedInfluencerQuery >
                  {({ data }) => {

                    const influencers = maybe(() => data.influencers.edges, [])
                    let FLAG = 0;
                    const influencersArray = []
                    influencers.map((ele) => {
                      if (ele.node.allVideos.length > 0) {
                        influencersArray.push({ ele })
                        FLAG = 1
                      }
                    })
                    
                    const handleSlide = (eventKey: number, event: Object | null) => {
                      document.querySelectorAll('video').forEach(vid => vid.pause());
                      const newVideo = document.getElementById(`video${eventKey}`).children[0]
                      newVideo.muted = false
                      newVideo.currentTime = 0;
                      newVideo.play();
                    }

                    const tabSelect = ( eventKey:any ,event?: object ) => {
                      document.querySelectorAll('video').forEach(vid => vid.pause());
                      const newVideo = document.getElementById(`uncontrolled-tab-example-tabpane-${eventKey}`).getElementsByTagName("video")[0];
                      newVideo.muted = false
                      newVideo.currentTime = 0;
                      newVideo.play();
                    }
                    
                    return (
                      <>
                        <div className="pointer">
                          {/* checked FLAG to hide modal button if no videos are attached with influencers */}
                          {FLAG === 1 ? (<PlayCircleOutlineIcon id="videoModal" onClick={showModal} className="primary animate__animated animate__pulse animate__infinite f-32" />) : ('')}
                        </div>
                        <Modal
                          show={isOpen}
                          onHide={hideModal}
                          size="xl"
                          aria-labelledby="contained-modal-title-vcenter"
                          centered>
                          <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">
                              {/* Modal heading */}
                            </Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <div className="p-1">
                              <div>
                                <img src={logoImg} className="modal-img" />
                              </div>
                              <Tabs defaultActiveKey={0} id="uncontrolled-tab-example" onSelect={tabSelect}>
                                <Tab eventKey="one" title="INFL" disabled className="transparent"></Tab>
                                {influencersArray.map((element, i) => (
                                  <Tab eventKey={`${i}`} title={`${element.ele.node.firstName} ${element.ele.node.lastName}`} >
                                    <Carousel
                                      // nextLabel={"Next"}
                                      // prevLabel={"Previous"}
                                      // activeIndex={index}
                                      onSlide={handleSlide}
                                      interval={null}
                                      // nextIcon={directionButtons("Next")}
                                      // prevIcon={directionButtons("Previous")}
                                      >
                                      {element.ele.node.allVideos.map((obj,index) => (
                                        <Carousel.Item>
                                          <ReactPlayer url={obj.url}
                                            controls={true}
                                            playing={index === 0 ? true : false}
                                            playsinline={true}
                                            className='vdo-focus'
                                            id={`video${index}`}
                                            />
                                          {/* <video src={obj.url} controls={true} autoPlay></video> */}
                                          <div>
                                            <Link to={generateProductUrl(obj.product.id, obj.product.name)} key={obj.product.id} onClick={hideModal}>
                                              <Button className="btn btn-primary btn-position animate__animated animate__pulse animate__infinite">
                                                <AddShoppingCartIcon className="f-22"/>
                                              </Button>
                                            </Link>
                                          </div>
                                        </Carousel.Item>
                                        )
                                      )}
                                    </Carousel>
                                  </Tab>
                                )
                                )}
                              </Tabs>
                            </div>
                          </Modal.Body>
                          {/* <Modal.Footer>
                          <Button>Close</Button>
                        </Modal.Footer> */}
                        </Modal>
                      </>
                    );
                  }}
                  
                </TypedInfluencerQuery>
              </li>
              <li
                className="main-menu__search"
                onClick={() =>
                  overlayContext.show(OverlayType.search, OverlayTheme.right)
                }
              >
                <Media
                  query={{ minWidth: mediumScreen }}
                  render={() => <span></span>}
                />
                <ReactSVG path={searchImg} />
              </li>

              <Online>
                <li
                  className="main-menu__icon main-menu__cart"
                  onClick={() => {
                    overlayContext.show(OverlayType.cart, OverlayTheme.right);
                  }}
                >
                  <ReactSVG path={cartImg} />
                  {cartItemsQuantity > 0 ? (
                    <span className="main-menu__cart__quantity">
                      {cartItemsQuantity}
                    </span>
                  ) : null}
                </li>
                <Media
                  query={{ minWidth: smallScreen }}
                  render={() => (
                    <>
                      {user ? (
                        <MenuDropdown
                          head={
                            <li className="main-menu__icon main-menu__user--active">
                              <ReactSVG path={userImg} />
                            </li>
                          }
                          content={
                            <ul className="main-menu__dropdown">
                              <li data-testid="my_account__link">
                                <Link to={appPaths.accountUrl}>My Account</Link>
                              </li>
                              <li data-testid="order_history__link">
                                <Link to={appPaths.orderHistoryUrl}>
                                  Order history
                                </Link>
                              </li>
                              <li data-testid="address_book__link">
                                <Link to={appPaths.addressBookUrl}>
                                  Address book
                                </Link>
                              </li>
                              <li
                                onClick={handleSignOut}
                                data-testid="logout-link"
                              >
                                Log Out
                              </li>
                            </ul>
                          }
                        />
                      ) : (
                          <li
                            data-testid="login-btn"
                            className="main-menu__icon"
                            onClick={() =>
                              overlayContext.show(
                                OverlayType.login,
                                OverlayTheme.right
                              )
                            }
                          >
                            <ReactSVG path={userImg} />
                          </li>
                        )}
                    </>
                  )}
                />

              </Online>
              <Offline>
                <li className="main-menu__offline">
                  <Media
                    query={{ minWidth: mediumScreen }}
                    render={() => <span>Offline</span>}
                  />
                </li>
              </Offline>

            </ul>
          </div>
        </nav>
      )}
    </OverlayContext.Consumer>
  );
};

export default MainMenu;
