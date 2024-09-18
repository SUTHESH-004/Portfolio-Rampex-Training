function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/projects" element={<ProjectsPage />}></Route>
          <Route path="/contact" element={<ContactPage/>}></Route>
        </Routes>
      </Router>
      {/* <div className="h-[100vh] w-[100vw] bg-black"></div> */}
    </>
  );
}

export default App;
