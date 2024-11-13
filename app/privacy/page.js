export default function Privacy() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy for Markdown Copy Extension</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Privacy Policy Overview</h2>
          <p className="text-gray-600 mb-4">
            The Markdown Copy extension is committed to protecting your privacy. This policy
            explains our data handling practices.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Data Collection and Usage</h2>
          <p className="text-gray-600 mb-2">Our extension:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>Does not collect any personal information</li>
            <li>Does not store any user data</li>
            <li>Does not track user behavior</li>
            <li>Does not use cookies</li>
            <li>Does not communicate with external servers</li>
            <li>Processes all content locally within your browser</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How the Extension Works</h2>
          <p className="text-gray-600 mb-2">The extension only:</p>
          <ol className="list-decimal pl-6 text-gray-600 mb-4">
            <li>
              Accesses webpage content when you explicitly trigger it (by selection or right-click)
            </li>
            <li>Converts the selected content to Markdown format</li>
            <li>Copies the result to your clipboard</li>
          </ol>
          <p className="text-gray-600">All operations are performed locally in your browser.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Permissions Usage</h2>
          <p className="text-gray-600 mb-2">
            The extension requests minimal permissions necessary for core functionality:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>
              <span className="font-semibold">activeTab:</span> To access current page content only
              when you use the extension
            </li>
            <li>
              <span className="font-semibold">clipboardWrite:</span> To copy converted Markdown to
              your clipboard
            </li>
            <li>
              <span className="font-semibold">contextMenus:</span> To provide right-click menu
              options
            </li>
            <li>
              <span className="font-semibold">scripting:</span> To perform content conversion
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Data Sharing</h2>
          <p className="text-gray-600 mb-2">We do not:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>Collect any data</li>
            <li>Share any information</li>
            <li>Store any content</li>
            <li>Connect to external services</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="text-gray-600 mb-4">
            If you have questions about this privacy policy, please contact us at
            me@microsassing.com.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
          <p className="text-gray-600">
            Any updates to this privacy policy will be reflected in the "13.11.2024" date above.
          </p>
        </section>
      </div>
    </main>
  );
}
