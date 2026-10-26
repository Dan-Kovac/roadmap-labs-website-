import { Rich } from "@/components/rich";
import { faq } from "@/lib/copy";

export function FaqList() {
  return (
    <div className="faq">
      {faq.map((item, index) => (
        <details key={item.q} open={index === 0}>
          <summary>
            {item.q}
            <span aria-hidden="true">+</span>
          </summary>
          <div className="faq-answer">
            <p>
              <Rich text={item.a} />
            </p>
          </div>
        </details>
      ))}
    </div>
  );
}
