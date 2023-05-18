import { AppRouter } from "./routes/AppRouter";

function App() {
  return (
    <div className="bg-background ">
      <main className="bg-backgroundPrimary min-h-screen font-sans">
        <AppRouter />
      </main>
    </div>
  );
}

export default App;
