import Button from "./components/ui/Button";
import Card from "./components/ui/Card";
import Input from "./components/ui/Input";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-10">
      <Card className="w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold text-white">
          SHAAN UI Kit
        </h1>

        <Input placeholder="Enter your prompt..." />

        <div className="flex gap-3">
          <Button>Primary</Button>

          <Button variant="secondary">
            Secondary
          </Button>

          <Button variant="danger">
            Delete
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default App;