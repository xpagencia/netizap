export interface message_send_request{
    app: string, // Nome e versão da aplicação que está fazendo o consumo da api.
    accesskey: string, // Chave única de acesso exclusivo.
    analyse: Date // (opcional) Indica análise no processamento. Padrão (true). Quando especificado "false", será ignorado pelos ciclos de processos. Indicado para casos onde há automação, mas que é necessário envios avulsos.
}

export interface message_send_response{
    result: string // id da transação
}
