<script>
import { ref } from "vue";

export default function useFormatCurrency(value) {
  const formattedValue = ref(value);

  if (typeof formattedValue.value === "number") {
    const formatter = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    formattedValue.value = formatter.format(formattedValue.value);
  }

  return formattedValue;
}
</script>
