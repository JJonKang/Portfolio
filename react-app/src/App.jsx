import { HashRouter, Routes, Route, Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
//previously used BrowserRouter but seems that HashRouter is good for GitHub hosting
import { useState, lazy, Suspense } from 'react'
import './index.css'
import About from './written/About.jsx'
import Credentials from './pages/Credentials.jsx'
import Projects from './pages/Projects.jsx'
import Contacts from './pages/Contacts.jsx'

/////////////////////////////////////
// Easily change the version name
function Version() {
  return "Version 1.1.0"
}

/////////////////////////////////////
// Breadcrumb for webpage navigation
// Obsolete at the moment, it stays
// For reference
// Replaced by ButtonTraversal
function Breadcrumb() {
  const location = useLocation()
  const paths = location.pathname.split('/').filter(Boolean)

  const crumbs = ['Home', ...paths.map(p => p.charAt(0).toUpperCase() + p.slice(1))]

  return (
    <p className="footer-text-explore">
      {crumbs.map((crumb, index) => {
        const path = index === 0 ? '/' : '/' + crumb.toLowerCase()
        const isLast = index === crumbs.length - 1
        return (
          <span key={index}>
            {index > 0 && ' > '}
            {isLast ? crumb : <Link to={path}>{crumb}</Link>}
          </span>
        )
      })}
    </p>
  );
};

/////////////////////////////////////
// Breadcrumbs but Buttons
// Easy way to traverse
// through the pages
function ButtonTraversal() {
  const location = useLocation()
  const navigate = useNavigate()
  const paths = location.pathname.split('/').filter(Boolean)
  const crumbs = ['Home', ...paths.map(p => p.charAt(0).toUpperCase() + p.slice(1))]

  // dimensions and style of the trapezoids
  const skew = 14
  const height = 44
  const width = 126
  const colors = ['#534AB7', '#3C3489', '#26215C', '#3C3489']

  const totalWidth = width * crumbs.length - skew * (crumbs.length - 1)

  return (
    <div className="breadcrumb-trapezoidal">
    <svg width={totalWidth} height={height} viewBox={`0 0 ${totalWidth} ${height}`}>
      
      {/* render all polygons first */}
      {crumbs.map((crumb, i) => {
        const isFirst = i === 0
        const isLast = i === crumbs.length - 1
        const path = isFirst ? '/' : '/' + paths.slice(0, i).join('/')
        const offsetX = i * (width - skew)
        const tl = isFirst ? 0 : skew
        const points = `
          ${offsetX + tl},0
          ${offsetX + width},0
          ${offsetX + width - skew},${height}
          ${offsetX},${height}
        `
        const color = colors[i % colors.length]
        return (
          <polygon
            key={i}
            points={points}
            fill={color}
            style={{ cursor: isLast ? 'default' : 'pointer' }}
            onClick={() => !isLast && navigate(path)}
          />
        )
      })}

      {/* render all text on top */}
      {crumbs.map((crumb, i) => {
        const isFirst = i === 0
        const isLast = i === crumbs.length - 1
        const path = isFirst ? '/' : '/' + paths.slice(0, i).join('/')
        const offsetX = i * (width - skew)
        const tl = isFirst ? 0 : skew
        const cx = offsetX + (tl + width - skew) / 2 + 4

        return (
          <text
            key={i}
            x={cx}
            y={height / 2}
            dominantBaseline="middle"
            textAnchor="middle"
            fill="white"
            fontSize={12}
            fontWeight={500}
            style={{ cursor: isLast ? 'default' : 'pointer' }}
            onClick={() => !isLast && navigate(path)}
          >
            {crumb}
          </text>
        )
      })}

    </svg>
    </div>
  )
}

/////////////////////////////////////
// Keep these in multiple webpages
function Layout({ dark, setDark }) {
  const btnLightClass = "box-btn-color-change " + (dark ? 'box-btn-dark' : 'box-btn-light')
  const location = useLocation()

  return (
    <div>
      {/* https://www.untitledui.com/free-icons */}
      <button className={btnLightClass} onClick={() => setDark(!dark)}>
        {dark ? (<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 2L18.6178 3.23558C18.8833 3.76656 19.016 4.03205 19.1934 4.26211C19.3507 4.46626 19.5337 4.64927 19.7379 4.80664C19.9679 4.98397 20.2334 5.11672 20.7644 5.38221L22 6L20.7644 6.61779C20.2334 6.88328 19.9679 7.01603 19.7379 7.19336C19.5337 7.35073 19.3507 7.53374 19.1934 7.73789C19.016 7.96795 18.8833 8.23344 18.6178 8.76442L18 10L17.3822 8.76442C17.1167 8.23344 16.984 7.96795 16.8066 7.73789C16.6493 7.53374 16.4663 7.35073 16.2621 7.19336C16.0321 7.01603 15.7666 6.88328 15.2356 6.61779L14 6L15.2356 5.38221C15.7666 5.11672 16.0321 4.98397 16.2621 4.80664C16.4663 4.64927 16.6493 4.46626 16.8066 4.26211C16.984 4.03205 17.1167 3.76656 17.3822 3.23558L18 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 13.3893C19.689 15.689 17.2145 17.2395 14.3779 17.2395C10.1711 17.2395 6.76075 13.8292 6.76075 9.62233C6.76075 6.78554 8.31149 4.31094 10.6115 3C5.77979 3.45812 2 7.52692 2 12.4785C2 17.7371 6.26292 22 11.5215 22C16.4729 22 20.5415 18.2206 21 13.3893Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ) : (
          <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2V4M12 20V22M4 12H2M6.31412 6.31412L4.8999 4.8999M17.6859 6.31412L19.1001 4.8999M6.31412 17.69L4.8999 19.1042M17.6859 17.69L19.1001 19.1042M22 12H20M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>
      <Outlet />
      <ButtonTraversal />
      <p className="footer-text-version"><Version /></p>
    </div>
  );
};

/////////////////////////////////////
// It's the home menu, where the user
// Begins in.
function Home({ dark }) {
  const btnClass = "box-btn " + (dark ? 'box-btn-dark' : 'box-btn-light')

  return (
    <div>
      <div className="line-u" />
      <h1 className="title">Portfolio</h1>
      <About />
      <div className="box-buttons">
        <Link to="/projects"><button className={btnClass}>Projects</button></Link>
        <Link to="/credentials"><button className={btnClass}>Credentials</button></Link>
        <Link to="/contacts"><button className={btnClass}>Contacts</button></Link>
      </div>
    </div>
  );
};

/////////////////////////////////////
// Hub for all details, including
// the home page
function App() {
  const [dark, setDark] = useState(false)
  // const Resume = lazy(() => import('./pages/Resume'))
  document.body.className = dark ? 'dark' : 'light';

  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout dark={dark} setDark={setDark} />}>
          <Route path="/" element={<Home dark={dark} />} />
          <Route path="/credentials" element={
            //<Suspense fallback={<div>Loading...</div>}>
            <Credentials />
            //</Suspense>
          } />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App