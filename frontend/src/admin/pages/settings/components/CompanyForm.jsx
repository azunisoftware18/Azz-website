export default function CompanyForm({ settings, onChange }) {
  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <h2 className="mb-6 text-xl font-semibold">Company Information</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Company Name */}

        <div>
          <label className="mb-2 block font-medium">Company Name</label>

          <input
            type="text"
            name="companyName"
            value={settings.companyName}
            onChange={onChange}
            className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter company name"
          />
        </div>

        {/* Tagline */}

        <div>
          <label className="mb-2 block font-medium">Tagline</label>

          <input
            type="text"
            name="tagline"
            value={settings.tagline}
            onChange={onChange}
            className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Company tagline"
          />
        </div>

        {/* Email */}

        <div>
          <label className="mb-2 block font-medium">Email</label>

          <input
            type="email"
            name="email"
            value={settings.email}
            onChange={onChange}
            className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="company@email.com"
          />
        </div>

        {/* Phone */}

        <div>
          <label className="mb-2 block font-medium">Phone</label>

          <input
            type="text"
            name="phone"
            value={settings.phone}
            onChange={onChange}
            className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="+91 9876543210"
          />
        </div>

        {/* WhatsApp */}

        <div>
          <label className="mb-2 block font-medium">WhatsApp</label>

          <input
            type="text"
            name="whatsapp"
            value={settings.whatsapp}
            onChange={onChange}
            className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="+91 9876543210"
          />
        </div>
      </div>

      {/* Address */}

      <div className="mt-6">
        <label className="mb-2 block font-medium">Address</label>

        <textarea
          rows={4}
          name="address"
          value={settings.address}
          onChange={onChange}
          className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Company address"
        />
      </div>

      {/* Footer */}

      <div className="mt-6">
        <label className="mb-2 block font-medium">Footer Text</label>

        <textarea
          rows={3}
          name="footerText"
          value={settings.footerText}
          onChange={onChange}
          className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          
        />
      </div>
    </div>
  );
}
