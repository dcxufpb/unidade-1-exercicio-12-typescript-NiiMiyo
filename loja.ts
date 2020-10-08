import { Endereco } from "./endereco";

function isEmpty(str: string): boolean {
	let spaceCount = str.length - str.replace(" ", "").length;
	return str == null || spaceCount == str.length;
}

export class Loja {
	constructor(
		public nome_loja: string,
		public endereco: Endereco,
		public telefone: string,
		public observacao: string,
		public cnpj: string,
		public inscricao_estadual: string
	) {}

	public dados_loja(): string {
		// Implemente aqui
		this.verifica_loja();

		let numeroStr: string =
			this.endereco.numero <= 0 ? "s/n" : this.endereco.numero.toString();

		let ln2: string = `${this.endereco.logradouro}, ${numeroStr}`;
		ln2 += isEmpty(this.endereco.complemento)
			? ""
			: ` ${this.endereco.complemento}`;
		ln2 += "\n";

		let ln3 = isEmpty(this.endereco.bairro)
			? ""
			: `${this.endereco.bairro} - `;
		ln3 += `${this.endereco.municipio} - ${this.endereco.estado}\n`;

		let ln4 = isEmpty(this.endereco.cep) ? "" : `CEP:${this.endereco.cep}`;
		if (!isEmpty(this.telefone)) {
			ln4 += isEmpty(ln4) ? "" : " ";
			ln4 += `Tel ${this.telefone}`;
		}
		ln4 += isEmpty(ln4) ? "" : "\n";

		let ln5 = isEmpty(this.observacao) ? "" : `${this.observacao}`;
		ln5 += "\n";

		let output = this.nome_loja + "\n";
		output += `${ln2}`;
		output += `${ln3}`;
		output += `${ln4}`;
		output += `${ln5}`;
		output += `CNPJ: ${this.cnpj}\n`;
		output += `IE: ${this.inscricao_estadual}\n`;

		return output;
	}

	verifica_loja(): void {
		if (isEmpty(this.nome_loja)) {
			throw new Error(`O campo nome da loja é obrigatório`);
		}

		if (isEmpty(this.endereco.logradouro)) {
			throw new Error(`O campo logradouro do endereço é obrigatório`);
		}

		if (isEmpty(this.endereco.municipio)) {
			throw new Error(`O campo município do endereço é obrigatório`);
		}

		if (isEmpty(this.endereco.estado)) {
			throw new Error(`O campo estado do endereço é obrigatório`);
		}

		if (isEmpty(this.cnpj)) {
			throw new Error(`O campo CNPJ da loja é obrigatório`);
		}

		if (isEmpty(this.inscricao_estadual)) {
			throw new Error(`O campo inscrição estadual da loja é obrigatório`);
		}
	}
}
