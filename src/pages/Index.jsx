import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function Index() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <section className="text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to MotoSaaS</h1>
        <p className="text-lg mb-6">
          The ultimate SaaS platform for motorcycle enthusiasts.
        </p>
        <Button variant="primary" size="lg">
          Get Started
        </Button>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Feature 1</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Discover the amazing features of our platform.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Feature 2</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Enhance your motorcycle experience with our tools.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Feature 3</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Join a community of like-minded enthusiasts.</p>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}

export default Index;