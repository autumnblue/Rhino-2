const Nav = () => (
  <div className="site-menubar" style={{ top: 0 }}>
        <div className="site-menubar-body scrollable scrollable-inverse scrollable-vertical is-disabled" style={{position: 'relative'}}>
          <div className="scrollable-container" style={{}}>
            <div className="scrollable-content">
              <ul className="site-menu" style={{transform: 'translate3d(0px, 0px, 0px)'}}>
                <li className="site-menu-category">General</li>
                <li className="site-menu-item has-sub">
                  <a href="javascript:void(0)">
                    <i className="site-menu-icon wb-dashboard" aria-hidden="true" />
                    <span className="site-menu-title">Clients</span>
                    <div className="site-menu-badge">
                      <span className="badge badge-success">3</span>
                    </div>
                  </a>
                  <ul className="site-menu-sub">
                    <li className="site-menu-item active">
                      <a className="animsition-link" href="index.html">
                        <span className="site-menu-title">Dashboard v1</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="dashboard/v2.html">
                        <span className="site-menu-title">Dashboard v2</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="dashboard/ecommerce.html">
                        <span className="site-menu-title">Ecommerce</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="dashboard/analytics.html">
                        <span className="site-menu-title">Analytics</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="dashboard/team.html">
                        <span className="site-menu-title">Team</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="site-menu-item has-sub">
                  <a href="javascript:void(0)">
                    <i className="site-menu-icon wb-layout" aria-hidden="true" />
                    <span className="site-menu-title">Layouts</span>
                    <span className="site-menu-arrow" />
                  </a>
                  <ul className="site-menu-sub">
                    <li className="site-menu-item">
                      <a className="animsition-link" href="layouts/menu-collapsed.html">
                        <span className="site-menu-title">Menu Collapsed</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="layouts/menu-collapsed-alt.html">
                        <span className="site-menu-title">Menu Collapsed Alt</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="layouts/menu-expended.html">
                        <span className="site-menu-title">Menu Expended</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="layouts/grids.html">
                        <span className="site-menu-title">Grid Scaffolding</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="layouts/layout-grid.html">
                        <span className="site-menu-title">Layout Grid</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="layouts/headers.html">
                        <span className="site-menu-title">Different Headers</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="layouts/panel-transition.html">
                        <span className="site-menu-title">Panel Transition</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="layouts/boxed.html">
                        <span className="site-menu-title">Boxed Layout</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="layouts/two-columns.html">
                        <span className="site-menu-title">Two Columns</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="layouts/menubar-flipped.html">
                        <span className="site-menu-title">Menubar Flipped</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="layouts/menubar-native-scrolling.html">
                        <span className="site-menu-title">Menubar Native Scrolling</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="layouts/bordered-header.html">
                        <span className="site-menu-title">Bordered Header</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="layouts/page-aside-fixed.html">
                        <span className="site-menu-title">Page Aside Fixed</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="site-menu-item has-sub">
                  <a href="javascript:void(0)">
                    <i className="site-menu-icon wb-file" aria-hidden="true" />
                    <span className="site-menu-title">Pages</span>
                    <span className="site-menu-arrow" />
                  </a>
                  <ul className="site-menu-sub">
                    <li className="site-menu-item has-sub">
                      <a href="javascript:void(0)">
                        <span className="site-menu-title">Errors</span>
                        <span className="site-menu-arrow" />
                      </a>
                      <ul className="site-menu-sub">
                        <li className="site-menu-item">
                          <a className="animsition-link" href="pages/error-400.html">
                            <span className="site-menu-title">400</span>
                          </a>
                        </li>
                        <li className="site-menu-item">
                          <a className="animsition-link" href="pages/error-403.html">
                            <span className="site-menu-title">403</span>
                          </a>
                        </li>
                        <li className="site-menu-item">
                          <a className="animsition-link" href="pages/error-404.html">
                            <span className="site-menu-title">404</span>
                          </a>
                        </li>
                        <li className="site-menu-item">
                          <a className="animsition-link" href="pages/error-500.html">
                            <span className="site-menu-title">500</span>
                          </a>
                        </li>
                        <li className="site-menu-item">
                          <a className="animsition-link" href="pages/error-503.html">
                            <span className="site-menu-title">503</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="pages/faq.html">
                        <span className="site-menu-title">FAQ</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="pages/gallery.html">
                        <span className="site-menu-title">Gallery</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="pages/gallery-grid.html">
                        <span className="site-menu-title">Gallery Grid</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="pages/search-result.html">
                        <span className="site-menu-title">Search Result</span>
                      </a>
                    </li>
                    <li className="site-menu-item has-sub">
                      <a href="javascript:void(0)">
                        <span className="site-menu-title">Maps</span>
                        <span className="site-menu-arrow" />
                      </a>
                      <ul className="site-menu-sub">
                        <li className="site-menu-item">
                          <a className="animsition-link" href="pages/map-google.html">
                            <span className="site-menu-title">Google Maps</span>
                          </a>
                        </li>
                        <li className="site-menu-item">
                          <a className="animsition-link" href="pages/map-vector.html">
                            <span className="site-menu-title">Vector Maps</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="pages/maintenance.html">
                        <span className="site-menu-title">Maintenance</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="pages/forgot-password.html">
                        <span className="site-menu-title">Forgot Password</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="pages/lockscreen.html">
                        <span className="site-menu-title">Lockscreen</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="pages/login.html">
                        <span className="site-menu-title">Login</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="pages/register.html">
                        <span className="site-menu-title">Register</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="pages/login-v2.html">
                        <span className="site-menu-title">Login V2</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="pages/register-v2.html">
                        <span className="site-menu-title">Register V2</span>
                        <div className="site-menu-label">
                          <span className="label label-info label-round">new</span>
                        </div>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="pages/login-v3.html">
                        <span className="site-menu-title">Login V3</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="pages/register-v3.html">
                        <span className="site-menu-title">Register V3</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="pages/user.html">
                        <span className="site-menu-title">User List</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="pages/invoice.html">
                        <span className="site-menu-title">Invoice</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="pages/blank.html">
                        <span className="site-menu-title">Blank Page</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="pages/email.html">
                        <span className="site-menu-title">Email</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="pages/code-editor.html">
                        <span className="site-menu-title">Code Editor</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="pages/profile.html">
                        <span className="site-menu-title">Profile</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="pages/site-map.html">
                        <span className="site-menu-title">Sitemap</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="site-menu-category">Elements</li>
                <li className="site-menu-item has-sub">
                  <a href="javascript:void(0)">
                    <i className="site-menu-icon wb-bookmark" aria-hidden="true" />
                    <span className="site-menu-title">Basic UI</span>
                    <span className="site-menu-arrow" />
                  </a>
                  <ul className="site-menu-sub">
                    <li className="site-menu-item has-sub">
                      <a href="javascript:void(0)">
                        <span className="site-menu-title">Panel</span>
                        <span className="site-menu-arrow" />
                      </a>
                      <ul className="site-menu-sub">
                        <li className="site-menu-item">
                          <a className="animsition-link" href="uikit/panel-structure.html">
                            <span className="site-menu-title">Panel Structure</span>
                          </a>
                        </li>
                        <li className="site-menu-item">
                          <a className="animsition-link" href="uikit/panel-actions.html">
                            <span className="site-menu-title">Panel Actions</span>
                          </a>
                        </li>
                        <li className="site-menu-item">
                          <a className="animsition-link" href="uikit/panel-portlets.html">
                            <span className="site-menu-title">Panel Portlets</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="uikit/buttons.html">
                        <span className="site-menu-title">Buttons</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="uikit/dropdowns.html">
                        <span className="site-menu-title">Dropdowns</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="uikit/icons.html">
                        <span className="site-menu-title">Icons</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="uikit/list.html">
                        <span className="site-menu-title">List</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="uikit/tooltip-popover.html">
                        <span className="site-menu-title">Tooltip &amp; Popover</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="uikit/modals.html">
                        <span className="site-menu-title">Modals</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="uikit/tabs-accordions.html">
                        <span className="site-menu-title">Tabs &amp; Accordions</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="uikit/images.html">
                        <span className="site-menu-title">Images</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="uikit/badges-labels.html">
                        <span className="site-menu-title">Badges &amp; Labels</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="uikit/progress-bars.html">
                        <span className="site-menu-title">Progress Bars</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="uikit/carousel.html">
                        <span className="site-menu-title">Carousel</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="uikit/typography.html">
                        <span className="site-menu-title">Typography</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="uikit/colors.html">
                        <span className="site-menu-title">Colors</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="uikit/utilities.html">
                        <span className="site-menu-title">Utilties</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="site-menu-item has-sub">
                  <a href="javascript:void(0)">
                    <i className="site-menu-icon wb-hammer" aria-hidden="true" />
                    <span className="site-menu-title">Advanced UI</span>
                    <span className="site-menu-arrow" />
                  </a>
                  <ul className="site-menu-sub">
                    <li className="site-menu-item hidden-xs site-tour-trigger">
                      <a href="javascript:void(0)">
                        <span className="site-menu-title">Tour</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="advanced/animation.html">
                        <span className="site-menu-title">Animation</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="advanced/highlight.html">
                        <span className="site-menu-title">Highlight</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="advanced/lightbox.html">
                        <span className="site-menu-title">Lightbox</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="advanced/scrollable.html">
                        <span className="site-menu-title">Scrollable</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="advanced/rating.html">
                        <span className="site-menu-title">Rating</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="advanced/context-menu.html">
                        <span className="site-menu-title">Context Menu</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="advanced/alertify.html">
                        <span className="site-menu-title">Alertify</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="advanced/masonry.html">
                        <span className="site-menu-title">Masonry</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="advanced/treeview.html">
                        <span className="site-menu-title">Treeview</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="advanced/toastr.html">
                        <span className="site-menu-title">Toastr</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="advanced/maps-vector.html">
                        <span className="site-menu-title">Vector Maps</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="advanced/maps-google.html">
                        <span className="site-menu-title">Google Maps</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="advanced/sortable-nestable.html">
                        <span className="site-menu-title">Sortable &amp; Nestable</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="advanced/bootbox-sweetalert.html">
                        <span className="site-menu-title">Bootbox &amp; Sweetalert</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="site-menu-item has-sub">
                  <a href="javascript:void(0)">
                    <i className="site-menu-icon wb-plugin" aria-hidden="true" />
                    <span className="site-menu-title">Structure</span>
                    <span className="site-menu-arrow" />
                  </a>
                  <ul className="site-menu-sub">
                    <li className="site-menu-item">
                      <a className="animsition-link" href="structure/alerts.html">
                        <span className="site-menu-title">Alerts</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="structure/ribbon.html">
                        <span className="site-menu-title">Ribbon</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="structure/pricing-tables.html">
                        <span className="site-menu-title">Pricing Tables</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="structure/overlay.html">
                        <span className="site-menu-title">Overlay</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="structure/cover.html">
                        <span className="site-menu-title">Cover</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="structure/timeline-simple.html">
                        <span className="site-menu-title">Simple Timeline</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="structure/timeline.html">
                        <span className="site-menu-title">Timeline</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="structure/step.html">
                        <span className="site-menu-title">Step</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="structure/comments.html">
                        <span className="site-menu-title">Comments</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="structure/media.html">
                        <span className="site-menu-title">Media</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="structure/chat.html">
                        <span className="site-menu-title">Chat</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="structure/testimonials.html">
                        <span className="site-menu-title">Testimonials</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="structure/nav.html">
                        <span className="site-menu-title">Nav</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="structure/navbars.html">
                        <span className="site-menu-title">Navbars</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="structure/blockquotes.html">
                        <span className="site-menu-title">Blockquotes</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="structure/pagination.html">
                        <span className="site-menu-title">Pagination</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="structure/breadcrumbs.html">
                        <span className="site-menu-title">Breadcrumbs</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="site-menu-item has-sub">
                  <a href="javascript:void(0)">
                    <i className="site-menu-icon wb-extension" aria-hidden="true" />
                    <span className="site-menu-title">Widgets</span>
                    <span className="site-menu-arrow" />
                  </a>
                  <ul className="site-menu-sub">
                    <li className="site-menu-item">
                      <a className="animsition-link" href="widgets/statistics.html">
                        <span className="site-menu-title">Statistics Widgets</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="widgets/data.html">
                        <span className="site-menu-title">Data Widgets</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="widgets/blog.html">
                        <span className="site-menu-title">Blog Widgets</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="widgets/chart.html">
                        <span className="site-menu-title">Chart Widgets</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="widgets/social.html">
                        <span className="site-menu-title">Social Widgets</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="widgets/weather.html">
                        <span className="site-menu-title">Weather Widgets</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="site-menu-item has-sub">
                  <a href="javascript:void(0)">
                    <i className="site-menu-icon wb-library" aria-hidden="true" />
                    <span className="site-menu-title">Forms</span>
                    <span className="site-menu-arrow" />
                  </a>
                  <ul className="site-menu-sub">
                    <li className="site-menu-item">
                      <a className="animsition-link" href="forms/general.html">
                        <span className="site-menu-title">General Elements</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="forms/material.html">
                        <span className="site-menu-title">Material Elements</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="forms/advanced.html">
                        <span className="site-menu-title">Advanced Elements</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="forms/layouts.html">
                        <span className="site-menu-title">Form Layouts</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="forms/wizard.html">
                        <span className="site-menu-title">Form Wizard</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="forms/validation.html">
                        <span className="site-menu-title">Form Validation</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="forms/masks.html">
                        <span className="site-menu-title">Form Masks</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="forms/editable.html">
                        <span className="site-menu-title">Form Editable</span>
                      </a>
                    </li>
                    <li className="site-menu-item has-sub">
                      <a href="javascript:void(0)">
                        <span className="site-menu-title">Editors</span>
                        <span className="site-menu-arrow" />
                      </a>
                      <ul className="site-menu-sub">
                        <li className="site-menu-item">
                          <a className="animsition-link" href="forms/editor-summernote.html">
                            <span className="site-menu-title">Summernote</span>
                          </a>
                        </li>
                        <li className="site-menu-item">
                          <a className="animsition-link" href="forms/editor-markdown.html">
                            <span className="site-menu-title">Markdown</span>
                          </a>
                        </li>
                        <li className="site-menu-item">
                          <a className="animsition-link" href="forms/editor-ace.html">
                            <span className="site-menu-title">Ace Editor</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="forms/image-cropping.html">
                        <span className="site-menu-title">Image Cropping</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="forms/file-uploads.html">
                        <span className="site-menu-title">File Uploads</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="site-menu-item has-sub">
                  <a href="javascript:void(0)">
                    <i className="site-menu-icon wb-table" aria-hidden="true" />
                    <span className="site-menu-title">Tables</span>
                    <span className="site-menu-arrow" />
                  </a>
                  <ul className="site-menu-sub">
                    <li className="site-menu-item">
                      <a className="animsition-link" href="tables/basic.html">
                        <span className="site-menu-title">Basic Tables</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="tables/bootstrap.html">
                        <span className="site-menu-title">Bootstrap Tables</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="tables/floatthead.html">
                        <span className="site-menu-title">floatThead</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="tables/responsive.html">
                        <span className="site-menu-title">Responsive Tables</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="tables/editable.html">
                        <span className="site-menu-title">Editable Tables</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="tables/jsgrid.html">
                        <span className="site-menu-title">jsGrid</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="tables/footable.html">
                        <span className="site-menu-title">FooTable</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="tables/datatable.html">
                        <span className="site-menu-title">DataTables</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="site-menu-item has-sub">
                  <a href="javascript:void(0)">
                    <i className="site-menu-icon wb-pie-chart" aria-hidden="true" />
                    <span className="site-menu-title">Chart</span>
                    <span className="site-menu-arrow" />
                  </a>
                  <ul className="site-menu-sub">
                    <li className="site-menu-item">
                      <a className="animsition-link" href="charts/chartjs.html">
                        <span className="site-menu-title">Chart.js</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="charts/gauges.html">
                        <span className="site-menu-title">Gauges</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="charts/flot.html">
                        <span className="site-menu-title">Flot</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="charts/peity.html">
                        <span className="site-menu-title">Peity</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="charts/sparkline.html">
                        <span className="site-menu-title">Sparkline</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="charts/morris.html">
                        <span className="site-menu-title">Morris</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="charts/chartist.html">
                        <span className="site-menu-title">Chartist.js</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="charts/rickshaw.html">
                        <span className="site-menu-title">Rickshaw</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="charts/pie-progress.html">
                        <span className="site-menu-title">Pie Progress</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="charts/c3.html">
                        <span className="site-menu-title">C3</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="site-menu-category">Apps</li>
                <li className="site-menu-item has-sub">
                  <a href="javascript:void(0)">
                    <i className="site-menu-icon wb-grid-4" aria-hidden="true" />
                    <span className="site-menu-title">Apps</span>
                    <span className="site-menu-arrow" />
                  </a>
                  <ul className="site-menu-sub">
                    <li className="site-menu-item">
                      <a className="animsition-link" href="apps/contacts/contacts.html">
                        <span className="site-menu-title">Contacts</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="apps/calendar/calendar.html">
                        <span className="site-menu-title">Calendar</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="apps/notebook/notebook.html">
                        <span className="site-menu-title">Notebook</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="apps/taskboard/taskboard.html">
                        <span className="site-menu-title">Taskboard</span>
                      </a>
                    </li>
                    <li className="site-menu-item has-sub">
                      <a href="javascript:void(0)">
                        <span className="site-menu-title">Documents</span>
                        <span className="site-menu-arrow" />
                      </a>
                      <ul className="site-menu-sub">
                        <li className="site-menu-item">
                          <a className="animsition-link" href="apps/documents/articles.html">
                            <span className="site-menu-title">Articles</span>
                          </a>
                        </li>
                        <li className="site-menu-item">
                          <a className="animsition-link" href="apps/documents/categories.html">
                            <span className="site-menu-title">Categories</span>
                          </a>
                        </li>
                        <li className="site-menu-item">
                          <a className="animsition-link" href="apps/documents/article.html">
                            <span className="site-menu-title">Article</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="apps/forum/forum.html">
                        <span className="site-menu-title">Forum</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="apps/message/message.html">
                        <span className="site-menu-title">Message</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="apps/projects/projects.html">
                        <span className="site-menu-title">Projects</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="apps/mailbox/mailbox.html">
                        <span className="site-menu-title">Mailbox</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="apps/media/overview.html">
                        <span className="site-menu-title">Media</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="apps/work/work.html">
                        <span className="site-menu-title">Work</span>
                      </a>
                    </li>
                    <li className="site-menu-item">
                      <a className="animsition-link" href="apps/location/location.html">
                        <span className="site-menu-title">Location</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="site-menu-category">Angular UI</li>
                <li className="site-menu-item">
                  <a className="animsition-link" href="angular/index.html">
                    <i className="site-menu-icon bd-angular" aria-hidden="true" />
                    <span className="site-menu-title">Angular UI</span>
                    <div className="site-menu-label">
                      <span className="label label-danger label-round">new</span>
                    </div>
                  </a>
                </li>
              </ul>
              <div className="site-menubar-section">
                <h5>
                  Milestone
                  <span className="pull-right">30%</span>
                </h5>
                <div className="progress progress-xs">
                  <div className="progress-bar active" style={{width: '30%'}} role="progressbar" />
                </div>
                <h5>
                  Release
                  <span className="pull-right">60%</span>
                </h5>
                <div className="progress progress-xs">
                  <div className="progress-bar progress-bar-warning" style={{width: '60%'}} role="progressbar" />
                </div>
              </div>
            </div>
          </div>
          <div className="scrollable-bar scrollable-bar-vertical scrollable-bar-hide" draggable="false"><div className="scrollable-bar-handle" style={{height: '805.792px'}} /></div></div>
        <div className="site-menubar-footer">
          <a href="javascript: void(0);" className="fold-show" data-placement="top" data-toggle="tooltip" data-original-title="Settings">
            <span className="icon wb-settings" aria-hidden="true" />
          </a>
          <a href="javascript: void(0);" data-placement="top" data-toggle="tooltip" data-original-title="Lock">
            <span className="icon wb-eye-close" aria-hidden="true" />
          </a>
          <a href="javascript: void(0);" data-placement="top" data-toggle="tooltip" data-original-title="Logout">
            <span className="icon wb-power" aria-hidden="true" />
          </a>
        </div>
      </div>


)

export default Nav;
