// import "./SideBar.css";
import { Link } from "react-router-dom";

const SideBar = ({ toggle }) => {
    return (
        // <div class={toggle ? "sidebar-admin" : "sidebar-admin close"}>
        //     <div className="sidebar-user-panel">
        //         <div className="user-panel">
        //             <img
        //                 src={process.env.PUBLIC_URL + "/assets/admin.png"}
        //                 className="user-img-circle"
        //                 alt="User_Image"
        //                 width="75px"
        //                 height="75px"
        //             />
        //             <div className="user-panel-info">
        //                 <p>Administrateur</p>
        //                 <div>
        //                     <i className="fa fa-circle user-online"></i>
        //                     <span className="txtOnline">Online</span>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     <ul>
        //         <li>
        //             <NavLink className="nav-link " to="/dashboard">
        //                 <span class="icon">
        //                     <i class="fa fa-desktop"></i>
        //                 </span>
        //                 <span class="item">Dashboard</span>
        //             </NavLink>
        //         </li>
        //         <li>
        //             <NavLink className="nav-link" to="/admin/exam">
        //                 <span class="icon">
        //                     <i class="fa fa-calendar-week"></i>
        //                 </span>
        //                 <span class="item">Date Of Exams</span>
        //             </NavLink>
        //         </li>
        //         <li>
        //             <NavLink className="nav-link" to="/admin/teachers">
        //                 <span class="icon">
        //                     <i class="fa fa-chalkboard-teacher"></i>
        //                 </span>
        //                 <span class="item">Teachers</span>
        //             </NavLink>
        //         </li>
        //         <li>
        //             <NavLink className="nav-link" to="/admin/students">
        //                 <span class="icon">
        //                     <i class="fa fa-user-friends"></i>
        //                 </span>
        //                 <span class="item">Students</span>
        //             </NavLink>
        //         </li>
        //         <li>
        //             <NavLink className="nav-link" to="/admin/absences">
        //                 <span class="icon">
        //                     <i class="fa fa-user-check"></i>
        //                 </span>
        //                 <span class="item">Absence</span>
        //             </NavLink>
        //         </li>
        //         <li>
        //             <NavLink className="nav-link" to="/admin/classes">
        //                 <span class="icon">
        //                     <i class="fa fa-chart-line"></i>
        //                 </span>
        //                 <span class="item">Classes</span>
        //             </NavLink>
        //         </li>
        //     </ul>
        // </div>
        <div class="sidebar-container">
            <div class="sidemenu-container navbar-collapse collapse fixed-menu">
                <div id="remove-scroll" class="left-sidemenu">
                    <ul
                        class="sidemenu  page-header-fixed slimscroll-style"
                        data-keep-expanded="false"
                        data-auto-scroll="true"
                        data-slide-speed="200"
                        style={{ paddingTop: "20px" }}
                    >
                        <li class="sidebar-toggler-wrapper hide">
                            <div class="sidebar-toggler">
                                <span></span>
                            </div>
                        </li>
                        <li class="sidebar-user-panel">
                            <div class="user-panel">
                                <div class="pull-left image">
                                    <img
                                        src={
                                            process.env.PUBLIC_URL +
                                            "/assets/admin.png"
                                        }
                                        class="img-circle user-img-circle"
                                        alt="User Image"
                                    />
                                </div>
                                <div class="pull-left info">
                                    <p> Admin</p>
                                    <a href="#">
                                        <i class="fa fa-circle user-online"></i>
                                        <span class="txtOnline">Online</span>
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item ">
                            <Link to="/dashboard" class="nav-link nav-toggle">
                                <i class="material-icons">dashboard</i>
                                <span class="title">Dashboard</span>
                                <span class="selected"></span>
                            </Link>
                        </li>
                        {/* <li class="nav-item">
                            <Link to="/admin/exam" class="nav-link nav-toggle">
                                <i class="material-icons">event</i>
                                <span class="title">Exam Management</span>
                            </Link>
                        </li> */}
                        <li class="nav-item">
                            <a href="#" class="nav-link nav-toggle">
                                {" "}
                                <i class="material-icons">person</i>
                                <span class="title">Professors</span>{" "}
                                <span class="arrow"></span>
                            </a>
                            <ul class="sub-menu">
                                <li class="nav-item">
                                    <Link
                                        to="/admin/teachers"
                                        class="nav-link "
                                    >
                                        {" "}
                                        <span class="title">
                                            All Professors
                                        </span>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link
                                        to="/admin/addTeacher"
                                        class="nav-link "
                                    >
                                        {" "}
                                        <span class="title">Add Professor</span>
                                    </Link>
                                </li>

                                {/* <li class="nav-item">
                                    <Link to="/EditProfessor" class="nav-link ">
                                        {" "}
                                        <span class="title">
                                            Edit Professor
                                        </span>
                                    </Link>
                                </li> */}
                                {/* <li class="nav-item">
                                    <a
                                        href="professor_profile.html"
                                        class="nav-link "
                                    >
                                        {" "}
                                        <span class="title">
                                            About Professor
                                        </span>
                                    </a>
                                </li> */}
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link nav-toggle">
                                <i class="material-icons">group</i>
                                <span class="title">Students</span>
                                <span class="arrow"></span>
                            </a>
                            <ul class="sub-menu">
                                <li class="nav-item">
                                    <Link
                                        to="/admin/students"
                                        class="nav-link "
                                    >
                                        {" "}
                                        <span class="title">All Students</span>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link
                                        to="/admin/addStudent"
                                        class="nav-link "
                                    >
                                        {" "}
                                        <span class="title">Add Student</span>
                                    </Link>
                                </li>

                                {/* <li class="nav-item">
                                    <Link to="/EditStudent" class="nav-link ">
                                        {" "}
                                        <span class="title">Edit Student</span>
                                    </Link>
                                </li> */}
                                {/* <li class="nav-item">
                                    <Link
                                        to="/"
                                        class="nav-link "
                                    >
                                        {" "}
                                        <span class="title">About Student</span>
                                    </Link>
                                </li> */}
                            </ul>
                        </li>
                        {/* <li class="nav-item">
                            <a href="#" class="nav-link nav-toggle">
                                {" "}
                                <i class="material-icons">school</i>
                                <span class="title">Courses</span>{" "}
                                <span class="arrow"></span>
                                <span class="label label-rouded label-menu label-success">
                                    new
                                </span>
                            </a>
                            <ul class="sub-menu">
                                <li class="nav-item">
                                    <a
                                        href="all_courses.html"
                                        class="nav-link "
                                    >
                                        {" "}
                                        <span class="title">All Courses</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="add_course.html" class="nav-link ">
                                        {" "}
                                        <span class="title">Add Course</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        href="add_course_bootstrap.html"
                                        class="nav-link "
                                    >
                                        {" "}
                                        <span class="title">
                                            Add Course Bootstrap
                                        </span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        href="edit_course.html"
                                        class="nav-link "
                                    >
                                        {" "}
                                        <span class="title">Edit Course</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        href="course_details.html"
                                        class="nav-link "
                                    >
                                        {" "}
                                        <span class="title">About Course</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link nav-toggle">
                                {" "}
                                <i class="material-icons">local_library</i>
                                <span class="title">Library</span>{" "}
                                <span class="arrow"></span>
                            </a>
                            <ul class="sub-menu">
                                <li class="nav-item">
                                    <a href="all_assets.html" class="nav-link ">
                                        {" "}
                                        <span class="title">
                                            All Library Assets
                                        </span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        href="add_library.html"
                                        class="nav-link "
                                    >
                                        {" "}
                                        <span class="title">
                                            Add Library Asset
                                        </span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        href="add_library_bootstrap.html"
                                        class="nav-link "
                                    >
                                        {" "}
                                        <span class="title">
                                            Add Asset Bootstrap
                                        </span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        href="edit_library.html"
                                        class="nav-link "
                                    >
                                        {" "}
                                        <span class="title">Edit Asset</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link nav-toggle">
                                {" "}
                                <i class="material-icons">business</i>
                                <span class="title">Departments</span>{" "}
                                <span class="arrow"></span>
                            </a>
                            <ul class="sub-menu">
                                <li class="nav-item">
                                    <a
                                        href="all_department.html"
                                        class="nav-link "
                                    >
                                        {" "}
                                        <span class="title">
                                            All Departments
                                        </span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        href="add_department.html"
                                        class="nav-link "
                                    >
                                        {" "}
                                        <span class="title">
                                            Add Department
                                        </span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        href="add_department_bootstrap.html"
                                        class="nav-link "
                                    >
                                        {" "}
                                        <span class="title">
                                            Add Department Bootstrap
                                        </span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        href="edit_department.html"
                                        class="nav-link "
                                    >
                                        {" "}
                                        <span class="title">
                                            Edit Department
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </li> */}
                        <li class="nav-item">
                            <a href="#" class="nav-link nav-toggle">
                                {" "}
                                <i class="material-icons">face</i>
                                <span class="title">Staff</span>{" "}
                                <span class="arrow"></span>
                            </a>
                            <ul class="sub-menu">
                                <li class="nav-item">
                                    <Link
                                        to="/admin/personel"
                                        class="nav-link "
                                    >
                                        {" "}
                                        <span class="title">All Staff</span>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link
                                        to="/admin/addPersonel"
                                        class="nav-link "
                                    >
                                        {" "}
                                        <span class="title">Add Staff</span>
                                    </Link>
                                </li>

                                {/* <li class="nav-item">
                                    <Link to="/admin/classes" class="nav-link ">
                                        {" "}
                                        <span class="title">Edit Staff</span>
                                    </Link>
                                </li> */}
                                {/* <li class="nav-item">
                                    <Link
                                        to="staff_profile.html"
                                        class="nav-link "
                                    >
                                        {" "}
                                        <span class="title">Staff Profile</span>
                                    </Link>
                                </li> */}
                            </ul>
                        </li>
                        {/* <li class="nav-item">
                            <a href="#" class="nav-link nav-toggle">
                                {" "}
                                <i class="material-icons">
                                    airline_seat_individual_suite
                                </i>
                                <span class="title">Holiday</span>{" "}
                                <span class="arrow"></span>
                            </a>
                            <ul class="sub-menu">
                                <li class="nav-item">
                                    <a
                                        href="all_holidays.html"
                                        class="nav-link "
                                    >
                                        {" "}
                                        <span class="title">All Holiday</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        href="add_holiday.html"
                                        class="nav-link "
                                    >
                                        {" "}
                                        <span class="title">Add Holiday</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        href="add_holiday_bootstrap.html"
                                        class="nav-link "
                                    >
                                        {" "}
                                        <span class="title">
                                            Add Holiday Bootstrap
                                        </span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        href="edit_holiday.html"
                                        class="nav-link "
                                    >
                                        {" "}
                                        <span class="title">Edit Holiday</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link nav-toggle">
                                <i class="material-icons">email</i>
                                <span class="title">Email</span>
                                <span class="arrow"></span>
                                <span class="label label-rouded label-menu label-danger">
                                    new
                                </span>
                            </a>
                            <ul class="sub-menu">
                                <li class="nav-item">
                                    <a
                                        href="email_inbox.html"
                                        class="nav-link "
                                    >
                                        <span class="title">Inbox</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="email_view.html" class="nav-link ">
                                        <span class="title">View Mail</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        href="email_compose.html"
                                        class="nav-link "
                                    >
                                        <span class="title">Compose Mail</span>
                                    </a>
                                </li>
                            </ul>
                        </li> */}
                        {/* <li class="nav-item">
                            <a href="#" class="nav-link nav-toggle">
                                {" "}
                                <i class="material-icons">monetization_on</i>
                                <span class="title">Fees</span>{" "}
                                <span class="arrow"></span>
                            </a>
                            <ul class="sub-menu">
                                <li class="nav-item">
                                    <Link to="/admin/payment" class="nav-link ">
                                        {" "}
                                        <span class="title">
                                            Fees Collection
                                        </span>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/admin/addFees" class="nav-link ">
                                        {" "}
                                        <span class="title">Add Fees </span>
                                    </Link>
                                </li>
                                {/* <li class="nav-item">
                                    <a
                                        href="add_fees_bootstrap.html"
                                        class="nav-link "
                                    >
                                        {" "}
                                        <span class="title">
                                            Add Fees Bootstrap
                                        </span>
                                    </a>
                                </li> 
                                {/* <li class="nav-item">
                                    <Link to="/FeesReceipt" class="nav-link ">
                                        {" "}
                                        <span class="title">Fee Receipt</span>
                                    </Link>
                                </li>  
                            </ul>
                        </li> */}
                        {/* <li class="nav-item">
                            <a href="#" class="nav-link nav-toggle">
                                {" "}
                                <i class="material-icons">view_quilt</i>
                                <span class="title">Layouts</span>{" "}
                                <span class="arrow"></span>
                            </a>
                            <ul class="sub-menu">
                                <li class="nav-item">
                                    <a
                                        href="layout_verticle.html"
                                        class="nav-link "
                                    >
                                        {" "}
                                        <span class="title">Verticle</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        href="layout_boxed.html"
                                        class="nav-link "
                                    >
                                        {" "}
                                        <span class="title">Boxed </span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        href="layout_collapse.html"
                                        class="nav-link "
                                    >
                                        {" "}
                                        <span class="title">Collapse</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        href="layout_hover_menu.html"
                                        class="nav-link "
                                    >
                                        {" "}
                                        <span class="title">Hover Menu</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        href="layout_right_sidebar.html"
                                        class="nav-link "
                                    >
                                        {" "}
                                        <span class="title">Right Sidebar</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a href="widget.html" class="nav-link nav-toggle">
                                {" "}
                                <i class="material-icons">widgets</i>
                                <span class="title">Widget</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link nav-toggle">
                                <i class="material-icons">dvr</i>
                                <span class="title">UI Elements</span>
                                <span class="label label-rouded label-menu label-warning">
                                    new
                                </span>
                                <span class="arrow"></span>
                            </a>
                            <ul class="sub-menu">
                                <li class="nav-item">
                                    <a href="ui_buttons.html" class="nav-link ">
                                        <span class="title">Buttons</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        href="ui_sweet_alert.html"
                                        class="nav-link "
                                    >
                                        <span class="title">Sweet Alert</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        href="ui_tabs_accordions_navs.html"
                                        class="nav-link "
                                    >
                                        <span class="title">
                                            Tabs &amp; Accordions
                                        </span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        href="ui_typography.html"
                                        class="nav-link "
                                    >
                                        <span class="title">Typography</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        href="notification.html"
                                        class="nav-link "
                                    >
                                        <span class="title">Notification</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="ui_icons.html" class="nav-link ">
                                        <span class="title">Icons</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="ui_panels.html" class="nav-link ">
                                        <span class="title">Panels</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="ui_grid.html" class="nav-link ">
                                        <span class="title">Grids</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="ui_tree.html" class="nav-link ">
                                        <span class="title">Tree View</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        href="ui_carousel.html"
                                        class="nav-link "
                                    >
                                        <span class="title">Carousel</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link nav-toggle">
                                <i class="material-icons">store</i>
                                <span class="title">Material Elements</span>
                                <span class="arrow"></span>
                            </a>
                            <ul class="sub-menu">
                                <li class="nav-item">
                                    <a
                                        href="material_button.html"
                                        class="nav-link "
                                    >
                                        <span class="title">Buttons</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        href="material_tab.html"
                                        class="nav-link "
                                    >
                                        <span class="title">Tabs</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        href="material_chips.html"
                                        class="nav-link "
                                    >
                                        <span class="title">Chips</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        href="material_grid.html"
                                        class="nav-link "
                                    >
                                        <span class="title">Grid</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        href="material_icons.html"
                                        class="nav-link "
                                    >
                                        <span class="title">Icon</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        href="material_form.html"
                                        class="nav-link "
                                    >
                                        <span class="title">Form</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        href="material_datepicker.html"
                                        class="nav-link "
                                    >
                                        <span class="title">DatePicker</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        href="material_select.html"
                                        class="nav-link "
                                    >
                                        <span class="title">Select Item</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        href="material_loading.html"
                                        class="nav-link "
                                    >
                                        <span class="title">Loading</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        href="material_menu.html"
                                        class="nav-link "
                                    >
                                        <span class="title">Menu</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        href="material_slider.html"
                                        class="nav-link "
                                    >
                                        <span class="title">Slider</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        href="material_tables.html"
                                        class="nav-link "
                                    >
                                        <span class="title">Tables</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        href="material_toggle.html"
                                        class="nav-link "
                                    >
                                        <span class="title">Toggle</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        href="material_badges.html"
                                        class="nav-link "
                                    >
                                        <span class="title">Badges</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a href="javascript:;" class="nav-link nav-toggle">
                                <i class="material-icons">subtitles</i>
                                <span class="title">Forms </span>
                                <span class="arrow"></span>
                            </a>
                            <ul class="sub-menu">
                                <li class="nav-item">
                                    <a
                                        href="layouts_form.html"
                                        class="nav-link "
                                    >
                                        <span class="title">Form Layout</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        href="advance_form.html"
                                        class="nav-link "
                                    >
                                        <span class="title">
                                            Advance Component
                                        </span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="wizard.html" class="nav-link ">
                                        <span class="title">Form Wizard</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        href="validation_form.html"
                                        class="nav-link "
                                    >
                                        <span class="title">
                                            Form Validation
                                        </span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        href="editable_form.html"
                                        class="nav-link "
                                    >
                                        <span class="title">Editor</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a href="javascript:;" class="nav-link nav-toggle">
                                <i class="material-icons">list</i>
                                <span class="title">Data Tables</span>
                                <span class="arrow"></span>
                            </a>
                            <ul class="sub-menu">
                                <li class="nav-item">
                                    <a
                                        href="basic_table.html"
                                        class="nav-link "
                                    >
                                        <span class="title">Basic Tables</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        href="advanced_table.html"
                                        class="nav-link "
                                    >
                                        <span class="title">
                                            Advance Tables
                                        </span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        href="export_table.html"
                                        class="nav-link "
                                    >
                                        <span class="title">Export Tables</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        href="child_row_table.html"
                                        class="nav-link "
                                    >
                                        <span class="title">
                                            Child Row Tables
                                        </span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        href="group_table.html"
                                        class="nav-link "
                                    >
                                        <span class="title">Grouping</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="tableData.html" class="nav-link ">
                                        <span class="title">
                                            Tables With Sourced Data
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a href="javascript:;" class="nav-link nav-toggle">
                                <i class="material-icons">timeline</i>
                                <span class="title">Charts</span>
                                <span class="arrow"></span>
                            </a>
                            <ul class="sub-menu">
                                <li class="nav-item">
                                    <a
                                        href="charts_apexchart.html"
                                        class="nav-link "
                                    >
                                        <span class="title">Apex chart</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        href="charts_amchart.html"
                                        class="nav-link "
                                    >
                                        <span class="title">amChart</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        href="charts_echarts.html"
                                        class="nav-link "
                                    >
                                        <span class="title">eCharts</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        href="charts_morris.html"
                                        class="nav-link "
                                    >
                                        <span class="title">Morris Charts</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        href="charts_chartjs.html"
                                        class="nav-link "
                                    >
                                        <span class="title">Chartjs</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a href="javascript:;" class="nav-link nav-toggle">
                                <i class="material-icons">map</i>
                                <span class="title">Maps</span>
                                <span class="arrow"></span>
                            </a>
                            <ul class="sub-menu">
                                <li class="nav-item">
                                    <a
                                        href="google_maps.html"
                                        class="nav-link "
                                    >
                                        <span class="title">Google Maps</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        href="vector_maps.html"
                                        class="nav-link "
                                    >
                                        <span class="title">Vector Maps</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a href="javascript:;" class="nav-link nav-toggle">
                                {" "}
                                <i class="material-icons">description</i>
                                <span class="title">Extra pages</span>
                                <span class="arrow"></span>
                            </a>
                            <ul class="sub-menu">
                                <li class="nav-item  ">
                                    <a href="login.html" class="nav-link ">
                                        {" "}
                                        <span class="title">Login</span>
                                    </a>
                                </li>
                                <li class="nav-item  ">
                                    <a href="sign_up.html" class="nav-link ">
                                        {" "}
                                        <span class="title">Sign Up</span>
                                    </a>
                                </li>
                                <li class="nav-item  ">
                                    <a
                                        href="forgot_password.html"
                                        class="nav-link "
                                    >
                                        {" "}
                                        <span class="title">
                                            Forgot Password
                                        </span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        href="user_profile.html"
                                        class="nav-link "
                                    >
                                        <span class="title">Profile</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="contact.html" class="nav-link ">
                                        {" "}
                                        <span class="title">Contact Us</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        href="lock_screen.html"
                                        class="nav-link "
                                    >
                                        {" "}
                                        <span class="title">Lock Screen</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="page-404.html" class="nav-link ">
                                        {" "}
                                        <span class="title">404 Page</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="page-500.html" class="nav-link ">
                                        {" "}
                                        <span class="title">500 Page</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="blank_page.html" class="nav-link ">
                                        {" "}
                                        <span class="title">Blank Page</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a href="javascript:;" class="nav-link nav-toggle">
                                <i class="material-icons">slideshow</i>
                                <span class="title">Multi Level Menu</span>
                                <span class="arrow "></span>
                            </a>
                            <ul class="sub-menu">
                                <li class="nav-item">
                                    <a
                                        href="javascript:;"
                                        class="nav-link nav-toggle"
                                    >
                                        <i class="fa fa-university"></i> Item 1
                                        <span class="arrow"></span>
                                    </a>
                                    <ul class="sub-menu">
                                        <li class="nav-item">
                                            <a
                                                href="javascript:;"
                                                class="nav-link nav-toggle"
                                            >
                                                <i class="fa fa-bell-o"></i>{" "}
                                                Arrow Toggle
                                                <span class="arrow "></span>
                                            </a>
                                            <ul class="sub-menu">
                                                <li class="nav-item">
                                                    <a
                                                        href="javascript:;"
                                                        class="nav-link"
                                                    >
                                                        <i class="fa fa-calculator"></i>{" "}
                                                        Sample Link 1
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a
                                                        href="#"
                                                        class="nav-link"
                                                    >
                                                        <i class="fa fa-clone"></i>{" "}
                                                        Sample Link 2
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a
                                                        href="#"
                                                        class="nav-link"
                                                    >
                                                        <i class="fa fa-cogs"></i>{" "}
                                                        Sample Link 3
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#" class="nav-link">
                                                <i class="fa fa-file-pdf-o"></i>{" "}
                                                Sample Link 1
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#" class="nav-link">
                                                <i class="fa fa-rss"></i> Sample
                                                Link 2
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#" class="nav-link">
                                                <i class="fa fa-hdd-o"></i>{" "}
                                                Sample Link 3
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a
                                        href="javascript:;"
                                        class="nav-link nav-toggle"
                                    >
                                        <i class="fa fa-gavel"></i> Arrow Toggle
                                        <span class="arrow"></span>
                                    </a>
                                    <ul class="sub-menu">
                                        <li class="nav-item">
                                            <a href="#" class="nav-link">
                                                <i class="fa fa-paper-plane"></i>{" "}
                                                Sample Link 1
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#" class="nav-link">
                                                <i class="fa fa-power-off"></i>{" "}
                                                Sample Link 1
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#" class="nav-link">
                                                <i class="fa fa-recycle"></i>{" "}
                                                Sample Link 1
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        <i class="fa fa-volume-up"></i> Item 3{" "}
                                    </a>
                                </li>
                            </ul>
                        </li> */}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
