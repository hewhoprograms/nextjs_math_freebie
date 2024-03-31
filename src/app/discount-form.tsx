"use client";

import React, { useState } from "react";

const DiscountForm = () => {
  const [result, setResult] = useState();
  const [fields, setFields] = useState<Record<string, string>>({});

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFields((prev) => ({
      ...fields,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //form
    const formData = new URLSearchParams();
    formData.append("price", fields.price);
    formData.append("percent", fields.percent);

    //request backend api
    const result = await fetch("/api/percentage-discount/", {
      method: "POST",
      body: formData.toString(),
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));

    //set result
    setResult(result);
  };

  return (
    <>
      <form className="flex flex-col gap-y-5" onSubmit={handleSubmit}>
        <pre>
          price: {fields.price}
          <br />
          percent: {fields.percent} %
        </pre>
        <input
          name="price"
          placeholder="input price"
          onChange={handleChange}
          required
          type="number"
          pattern="[0-9]"
        />
        <input
          title="percent"
          name="percent"
          placeholder="input percent"
          onChange={handleChange}
          required
          type="number"
          pattern="[0-9]"
        />
        <button type="submit" className="bg-black text-white">
          Submit
        </button>
      </form>
      <pre className="my-6">{JSON.stringify(result)}</pre>
    </>
  );
};

export default DiscountForm;
